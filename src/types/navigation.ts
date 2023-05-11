import { NavigatorScreenParams } from '@react-navigation/native';
import { User } from 'types';

export type RootStackParamList = {
  // GetStartedNavigation:
  //   | undefined
  //   | NavigatorScreenParams<WelcomeStackParamList>;
  WelcomeNavigation: undefined | NavigatorScreenParams<WelcomeStackParamList>;
  HomeNavigation: undefined | NavigatorScreenParams<HomeStackParamList>;
};

export type WelcomeStackParamList = {
  Dashboard: undefined;
  Splash: undefined;
  Welcome: undefined;
  Followers: undefined;
  Following: undefined;
  ProfileView: undefined;
};

export type AuthStackParamList = {
  AccountSetupEmailAddress: undefined;
  AccountSetupPassword: {
    email: string;
  };
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ParentSignUp: undefined;
  PlayerSignUp: undefined;
  AccountSetupProfile:
    | {
        user: User;
      }
    | {
        email: string;
      }
    | undefined;
};

export type HomeStackParamList = {
  Main: undefined;
  Leaderboard: undefined;
  FindEvaluation: undefined;
  EventItem: undefined;
  LeaderboardItem: undefined;
  AboutUs: undefined;
};
