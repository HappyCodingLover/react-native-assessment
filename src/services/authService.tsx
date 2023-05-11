import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import axios, { AxiosResponse } from 'axios';
import * as Sentry from '@sentry/react-native';
import analytics from '@react-native-firebase/analytics';

import { RootStackParamList } from 'navigation';
import { useLocation } from './locationServices';
import { LoginResponse, UserServices } from './userServices';
import { useToast } from './toastServices';
import { State } from 'redux/store';
import { onGotUserProfile, onLoggedIn, onLoggedOut } from 'redux/actions/users';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics({
  allowDeviceCredentials: true,
});

type SignUpFields = {
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  appleId?: string;
  googleId?: string;
  phoneNumber?: string;
  referralCode?: string;
};

type LogInFields = {
  email: string;
  password?: string;
  atSignUp?: boolean;
};

export interface AuthContextInterface {
  bioType: string;
  sessionKey: string | null;
  token: string | null;
  isAuthorized: boolean | null;
  isLoading: boolean;
  error: string;
  signUp: ((fields: SignUpFields) => Promise<void>) | null;
  logIn: ((fields: LogInFields) => Promise<void>) | null;
  googleLogIn: ((signup?: Boolean) => Promise<void>) | null;
  appleLogIn: (() => Promise<void>) | null;
  faceIdLogIn: (() => Promise<void>) | null;
  faceIdEnabled: boolean;
  disableFaceId: (() => Promise<void>) | null;
  enableFaceId: (() => Promise<void>) | null;
  deleteAccount: (() => Promise<void>) | null;
  logOut: (() => Promise<void>) | null;
  reset: (() => void) | null;
  setIsAuthorized: ((value: boolean) => void) | null;
  linkSpotify: ((option: { isRegistering: boolean }) => Promise<void>) | null;
}

export const AuthContext = createContext<AuthContextInterface>({
  bioType: 'touchId',
  sessionKey: null,
  token: null,
  isAuthorized: null,
  isLoading: false,
  error: '',
  signUp: null,
  logIn: null,
  googleLogIn: null,
  appleLogIn: null,
  faceIdLogIn: null,
  faceIdEnabled: false,
  disableFaceId: null,
  enableFaceId: null,
  deleteAccount: null,
  logOut: null,
  reset: null,
  setIsAuthorized: null,
  linkSpotify: null,
});

export const AuthProvider: React.FC<
  React.PropsWithChildren<{ session: string }>
> = ({ children, session }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [sessionKey, setSessionKey] = useState(session);
  const [bioType, setBioType] = useState('touchId');

  const { city } = useLocation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const { showToast } = useToast();

  const userProfile = useSelector((state: State) => state.users.profile);

  useEffect(() => {
    const configureGoogleSignIn = () => {
      GoogleSignin.configure({
        webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        offlineAccess: false,
      });
    };
    const initBiometrics = async () => {
      const { available, biometryType } =
        await rnBiometrics.isSensorAvailable();

      if (available && biometryType === BiometryTypes.TouchID) {
        setBioType('touchId');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        setBioType('faceId');
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        setBioType('biometrics');
      } else {
        setBioType('');
      }
      const faceIdEnabled = await AsyncStorage.getItem('FACE_ID_ENABLED');
      if (faceIdEnabled) {
        setFaceIdEnabled(true);
      }
    };

    initBiometrics();
    configureGoogleSignIn();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userProfile?.user?.id) {
        return;
      }
      setIsLoading(true);
      const res = await UserServices.getProfile({
        user_id: userProfile?.user?.id,
      });

      if (res.data.profile) {
        dispatch(onGotUserProfile({ profile: res.data.profile }));
      } else {
        dispatch(onLoggedOut());
      }
      setIsLoading(false);
    };
    if (sessionKey) {
      fetchProfile();
    }
  }, [dispatch, userProfile?.user.id, sessionKey]);

  const saveSessionKey = (key: string) => {
    AsyncStorage.setItem('SESSION_KEY', key);
    setSessionKey(key);
  };

  const removeSessionKey = () => {
    AsyncStorage.removeItem('SESSION_KEY');
    setSessionKey('');
  };

  const handleLoginResp = async (
    res: AxiosResponse<LoginResponse>,
    defaultStack: keyof RootStackParamList,
    defaultScreen: any
  ) => {
    const { profile, session_key, error: e } = res.data;

    if (profile && session_key) {
      const faceIDKey = await AsyncStorage.getItem('FACE_ID_PUBLIC_KEY');
      if (faceIDKey) {
        //send face id key on successful login in case changed or logging in first time
        UserServices.sendFaceIDPublicKey({ faceIDKey });
      }
      dispatch(onLoggedIn({ profile }));
      saveSessionKey(session_key);
      navigate(defaultStack, defaultScreen);
    } else {
      showToast({ message: e || 'Unexpected error', type: 'warning' });
      setError(e || 'Unexpected Error');
    }
  };

  const signUp = async ({
    email,
    appleId,
    googleId,
    password,
    firstName,
    lastName,
    phoneNumber,
    referralCode,
  }: SignUpFields) => {
    setIsLoading(true);
    try {
      setError('');

      const signupRes = await UserServices.signup({
        email,
        appleId,
        googleId,
        password,
        city,
        firstName,
        lastName,
        phone: phoneNumber,
        referralCode,
      });

      if (signupRes.data.profile) {
        if (password && !appleId) {
          const res = await UserServices.login({ email, password, city });
          handleLoginResp(res, 'OnboardingStack', { screen: 'LinkSpotify' });
        } else if (appleId && password) {
          const res = await UserServices.appleLogin({
            email,
            tokenId: password,
          });
          handleLoginResp(res, 'OnboardingStack', { screen: 'LinkSpotify' });
        } else {
          navigate('OnboardingStack', { screen: 'LinkSpotify' });
        }
      } else {
        showToast({
          message: signupRes.data.error || 'Unexpected error',
          type: 'warning',
        });
        setError(signupRes.data.error || 'Unexpected Error');
      }
    } catch (e: any) {
      Sentry.captureException(e);
    }
    setIsLoading(false);
  };

  const logIn = async ({ email, password, atSignUp }: LogInFields) => {
    setIsLoading(true);
    try {
      setError('');

      const res = await UserServices.login({ email, password, city });
      if (atSignUp) {
        if (res.data.error) {
          setError('Failed to login with password');
          showToast({
            message:
              'An account already exists for this email, but the password is incorrect. Please try to log in with correct password.',
            type: 'warning',
            timeToHide: 5000,
          });
        } else {
          showToast({
            message:
              'An account already exists for this email and password. You have been automatically logged in.',
            type: 'success',
            timeToHide: 5000,
          });
          handleLoginResp(res, 'MainStack', null);
        }
      } else {
        handleLoginResp(res, 'MainStack', null);
      }
    } catch (e: any) {
      setError('Failed to login with password');
      showToast({ message: 'Failed to login with password', type: 'warning' });
      Sentry.captureException(e);
    }
    setIsLoading(false);
  };

  const googleLogIn = async (signup?: Boolean) => {
    setIsLoading(true);
    try {
      setError('');

      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      if (idToken) {
        const res = await UserServices.googleLogin({ tokenId: idToken });

        const { googleId } = res.data;

        if (googleId) {
          // no profile, create user
          const { email, firstName, lastName } = res.data;
          navigate('SignUpStep', {
            email: email || '',
            firstName,
            lastName,
            googleId,
          });
        } else {
          if (signup) {
            showToast({
              message:
                'An account already exists for this email and password. You have been automatically logged in.',
              type: 'success',
              timeToHide: 5000,
            });
          }
          handleLoginResp(res, 'MainStack', null);
        }
      } else {
        setError('Failed to login with Google');
        showToast({ message: 'Failed to login with Google', type: 'warning' });
      }
    } catch (e: any) {
      if (
        e.code !== -5 &&
        e.message !== 'The user canceled the sign-in flow.'
      ) {
        setError('Failed to login with Google');
        showToast({ message: 'Failed to login with Google', type: 'warning' });
        Sentry.captureException(e);
      }
    }
    setIsLoading(false);
  };

  const appleLogIn = async () => {
    setIsLoading(true);

    try {
      setError('');

      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Ensure Apple returned a user identityToken
      if (!appleAuthRequestResponse.identityToken) {
        throw 'Apple Sign-In failed - no identify token returned';
      }

      // Create a Firebase credential from the response
      const { identityToken, nonce } = appleAuthRequestResponse;
      const appleCredential = auth.AppleAuthProvider.credential(
        identityToken,
        nonce
      );

      // Sign the user in with the credential
      const credential = await auth().signInWithCredential(appleCredential);
      if (credential && credential.user.email) {
        const email = credential.user.email;
        const phoneNumber = credential.user.phoneNumber || '';
        const tokenId = appleCredential.token;
        const loginRes = await UserServices.appleLogin({ email, tokenId });
        const { appleId } = loginRes.data;
        const name = credential.user.displayName;

        if (appleId) {
          // // no profile, create user
          const signupRes = await UserServices.signup({
            email: credential.user.email,
            appleId,
            city,
            firstName: credential.user.displayName || '',
            lastName: '',
            phone: credential.user.phoneNumber || '',
            referralCode: '',
          });

          handleLoginResp(signupRes, 'OnboardingStack', {
            screen: 'Onboarding',
          });
        } else {
          handleLoginResp(loginRes, 'MainStack', null);
        }
      } else {
        setError('Failed to login with Apple');
        showToast({ message: 'Failed to login with Apple', type: 'warning' });
      }
    } catch (e: any) {
      if (e.code !== 1001) {
        //Login with icloud alert to user
        setError('Failed to login with Apple');
        showToast({ message: 'Failed to login with Apple', type: 'warning' });
        Sentry.captureException(e);
      }
    }
    setIsLoading(false);
  };

  const [faceIdEnabled, setFaceIdEnabled] = useState<boolean>(false);

  const disableFaceId = async () => {
    setFaceIdEnabled(false);
    await AsyncStorage.removeItem('FACE_ID_ENABLED');
  };

  const enableFaceId = async () => {
    setFaceIdEnabled(true);
    await AsyncStorage.setItem('FACE_ID_ENABLED', 'true');
    const faceIDKey = await AsyncStorage.getItem('FACE_ID_PUBLIC_KEY');
    const { keysExist } = await rnBiometrics.biometricKeysExist();
    if (!keysExist || !faceIDKey) {
      await rnBiometrics.deleteKeys();
      const { publicKey } = await rnBiometrics.createKeys();
      saveFaceIDKey(publicKey);
    }
    if (sessionKey && faceIDKey) {
      //enabled face id when already logged in, send key to server
      await UserServices.sendFaceIDPublicKey({ faceIDKey: faceIDKey });
    }
  };

  const faceIdLogIn = async () => {
    setIsLoading(true);
    enableFaceId();
    try {
      setError('');

      let payload = 'Face ID Login';
      const resultObject = await rnBiometrics.createSignature({
        promptMessage: 'Sign in',
        payload: payload,
      });
      const { success, signature } = resultObject;
      if (success) {
        const faceIDPubKey = await AsyncStorage.getItem('FACE_ID_PUBLIC_KEY');

        if (faceIDPubKey && signature) {
          const loginRes = await UserServices.faceIDLogin({
            faceIDKey: faceIDPubKey,
            faceIDSignature: signature,
          });
          if (!loginRes.data.error) {
            handleLoginResp(loginRes, 'MainStack', null);
          } else {
            setError(
              'Failed to login using Face ID. Please try logging in again.'
            );
            showToast({
              message:
                'Failed to login using Face ID. Please try logging in again.',
              type: 'warning',
            });
          }
        }
      }
    } catch (e: any) {
      disableFaceId();
      setError('Failed to validate Face ID.');
      showToast({ message: 'Failed to validate login.', type: 'warning' });
      Sentry.captureException(e);
    }
    analytics().logEvent('face_id_login', {});
    setIsLoading(false);
  };

  const saveFaceIDKey = async (publicKey: string) => {
    await AsyncStorage.setItem('FACE_ID_PUBLIC_KEY', publicKey);
  };

  const linkSpotify = async (option: { isRegistering: boolean }) => {
    setIsLoading(true);

    try {
      setError('');

      const { accessToken } = await authorize(spotifyAuthConfig);

      if (accessToken) {
        const spotifyProfileRes = await axios.get(
          'https://api.spotify.com/v1/me',
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const spotifyTopArtistsRes = await axios.get(
          'https://api.spotify.com/v1/me/top/artists?limit=50',
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const linkRes = await UserServices.linkSpotify({
          artists: spotifyTopArtistsRes.data.items,
          spotify_user_id: spotifyProfileRes.data.id,
          user_id: userProfile?.user?.id,
        });

        if (linkRes.data.error) {
          showToast({
            message: linkRes.data.error || 'Unexpected Error',
            type: 'warning',
          });
          setError('Failed to link Spotify');
        } else if (linkRes.data.profile) {
          dispatch(onGotUserProfile({ profile: linkRes.data.profile }));

          showToast({
            message:
              'Thank you for linking your Spotify! We have added $10 in credit to your account.',
            type: 'success',
          });
          if (option.isRegistering) {
            navigate('OnboardingStack', { screen: 'Onboarding' });
          }
        }
      } else {
        setError('Failed to link Spotify');
      }
    } catch (e: any) {
      if (e.code !== -3) {
        //Only if not user cancelled error
        setError('Failed to link Spotify');
        showToast({ message: 'Failed to link Spotify', type: 'warning' });
        Sentry.captureException(e);
      }
    }

    setIsLoading(false);
  };

  const deleteAccount = async () => {
    await UserServices.deleteAccount();
    await logOut();
  };

  const logOut = useCallback(async () => {
    await UserServices.logout();
    removeSessionKey();
    dispatch(onLoggedOut());
  }, [dispatch]);

  const reset = useCallback(() => {
    setError('');
    setIsLoading(false);
  }, [setError, setIsLoading]);

  return (
    <AuthContext.Provider
      value={{
        bioType,
        sessionKey,
        isAuthorized,
        logOut,
        logIn,
        signUp,
        googleLogIn,
        appleLogIn,
        faceIdLogIn,
        faceIdEnabled,
        disableFaceId,
        enableFaceId,
        reset,
        setIsAuthorized,
        deleteAccount,
        isLoading,
        error,
        linkSpotify,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    bioType,
    sessionKey,
    token,
    logIn,
    signUp,
    googleLogIn,
    appleLogIn,
    faceIdLogIn,
    faceIdEnabled,
    disableFaceId,
    enableFaceId,
    logOut,
    deleteAccount,
    isLoading,
    error,
    reset,
    linkSpotify,
  } = useContext(AuthContext);

  useEffect(() => {
    return () => (reset ? reset() : undefined);
  }, [reset]);

  if (
    !logIn ||
    !signUp ||
    !googleLogIn ||
    !appleLogIn ||
    !faceIdLogIn ||
    !disableFaceId ||
    !enableFaceId ||
    !logOut ||
    !linkSpotify ||
    !deleteAccount
  ) {
    throw new Error('useAuth must be inside of the AuthProvider');
  }

  return {
    bioType,
    sessionKey,
    token,
    logIn,
    signUp,
    googleLogIn,
    appleLogIn,
    faceIdLogIn,
    faceIdEnabled,
    disableFaceId,
    enableFaceId,
    logOut,
    deleteAccount,
    isLoading,
    error,
    linkSpotify,
  };
};

export const useProfile = () => {
  const userProfile = useSelector((state: State) => state.users.profile);
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const fetchProfile = useCallback(async () => {
    if (!userProfile?.user?.id) {
      dispatch(onLoggedOut());
      return;
    }
    const res = await UserServices.getProfile({
      user_id: userProfile?.user?.id,
    });
    if (res.data.error) {
      dispatch(onLoggedOut());
      navigate('Welcome');
    } else if (res.data.profile) {
      dispatch(onGotUserProfile({ profile: res.data.profile }));
    }
  }, [userProfile?.user?.id]);

  return { profile: userProfile, fetchProfile };
};
