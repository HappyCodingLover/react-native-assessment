import React, { useState, useEffect } from 'react';
import { Box, Text, HStack, Stack, Avatar, Spinner } from 'native-base';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { ImageBackground, Linking } from 'react-native';
import axios from 'axios';
import { WelcomeStackParamList } from 'types';
import { Images } from 'assets';
import { Button } from 'components';

const ProfileView = () => {
  const route = useRoute();
  const { navigate } = useNavigation<NavigationProp<WelcomeStackParamList>>();
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  const { userName } = route.params;
  const fecthData = async () => {
    try {
      if (userName === null) return;
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      if (response === null) {
        return;
      } else {
        setLoading(false);
      }
      let data = response.data;
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const MoveGithubHandler = () => {
    if (userData === null) {
      return;
    }
    const githubUrl = userData.url;

    Linking.openURL(githubUrl).catch(error => {
      console.log('Error opening GitHub:', error);
    });
  };
  useEffect(() => {
    fecthData();
  }, []);
  return (
    <Stack flex={1}>
      <ImageBackground
        source={Images.WelcomeImage}
        resizeMode="cover"
        style={{ flex: 1 }}>
        <Text textAlign="center" py={2} fontSize={20} color="white">
          Profile
        </Text>
        {userData !== null ? (
          <Stack px={6} space={2}>
            <Stack alignItems="center">
              <Avatar
                bg="amber.500"
                source={{
                  uri: userData?.avatar_url,
                }}
                size="xl"
              />
            </Stack>
            <Stack alignItems="center" py={3}>
              {userData?.login !== '' && (
                <Text color="white"> {userData?.login} </Text>
              )}
              {userData?.name !== '' && (
                <Text color="white"> {userData?.name} </Text>
              )}
              {userData?.email !== '' && (
                <Text color="white"> {userData?.email} </Text>
              )}
              {userData?.bio !== '' && (
                <Text color="white"> {userData?.bio} </Text>
              )}
              {userData?.company !== '' && (
                <Text color="white"> {userData?.company} </Text>
              )}
              {userData?.location !== '' && (
                <Text color="white"> {userData?.location} </Text>
              )}
              {userData?.blog !== '' && (
                <Text color="white"> {userData?.blog} </Text>
              )}
            </Stack>
            <Button
              sz="large"
              onPress={MoveGithubHandler}
              type="secondary"
              text="Go Github Profile"
              shadow="7"
              loading={loading}
            />
          </Stack>
        ) : (
          <HStack space={2} paddingTop={3} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
          </HStack>
        )}
      </ImageBackground>
    </Stack>
  );
};

export default ProfileView;
