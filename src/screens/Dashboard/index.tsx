import React, { useState, useEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import {
  Box,
  StatusBar,
  Stack,
  Text,
  HStack,
  CloseIcon,
  ScrollView,
  Avatar,
  Pressable,
} from 'native-base';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, LabeledInput } from 'components';
import { WelcomeStackParamList, UserInterface } from 'types';
import { GithubIcon, Images } from 'assets';
import { Colors } from 'config';

const Dashboard = () => {
  const [userName, setUserName] = useState<string>('');
  const [errorStatus, setError] = useState<string>('no error');
  const [found, setFound] = useState<string>('');
  const [filterStatus, setFilteringStatus] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<UserInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const { navigate } = useNavigation<NavigationProp<WelcomeStackParamList>>();

  const FilterHandler = async () => {
    try {
      if (userName === '') {
        return;
      }
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      if (response === null) {
        setFilteringStatus(false);
        return;
      } else {
        setFound('');
        const userData = response.data;
        let data = {
          avatar: userData.avatar_url,
          userName: userData.login,
          name: userData.name,
          description: userData.bio,
          followers: userData.followers,
          followers_url: userData.followers_url,
          following: userData.following,
          following_url: userData.following_url,
        };
        setFilterData(data);
        setFilteringStatus(true);

        setLoading(false);
      }
    } catch (error: string) {
      setError(error);
      setFound('Not Found');
      console.error('Error >>>', error);
    }
  };
  const navigateFlowersHandler = () => {
    navigate('WelcomeNavigation', {
      screen: 'Followers',
      params: { followers_url: filterData?.followers_url },
    });
  };
  const navigateFollowingHandler = () => {
    navigate('WelcomeNavigation', {
      screen: 'Following',
      params: { following_url: filterData?.following_url },
    });
  };
  //
  const clearUserNameHandler = () => {};
  useEffect(() => {
    setFound('');
    if (filterData === null) {
      filterStatus(false);
    }
  }, [userName]);
  return (
    <Box flex={1}>
      <StatusBar backgroundColor={Colors.transparent} translucent />
      <ImageBackground
        source={Images.WelcomeImage}
        resizeMode="cover"
        style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
          <ScrollView px={6}>
            <HStack space={3} alignItems="center">
              <GithubIcon width={30} height={30} color="white" />
              <Text color="white" fontSize={12} fontWeight="bold">
                Speer Technologies React Native assessment
              </Text>
            </HStack>
            <Stack space="1" justifyContent="center" mt="5">
              <LabeledInput
                type="email"
                label="Filter UserName"
                value={userName}
                onChange={setUserName}
                placeholder="Enter UserName"
                rightElement={<CloseIcon />}
                onPressedRightElement={clearUserNameHandler}
              />
              <Button
                sz="large"
                onPress={FilterHandler}
                type="secondary"
                text="Search"
                shadow="7"
              />
            </Stack>
            <Stack justifyContent="center" alignItems="center" paddingTop={4}>
              <Text color="white" fontSize={24}>
                {found}
              </Text>
            </Stack>
            {found === '' && filterStatus === true && (
              <Stack px={2} py={3}>
                <HStack space={3} alignItems="center">
                  <Avatar
                    bg="amber.500"
                    source={{
                      uri: filterData?.avatar,
                    }}
                    size="lg"
                  />
                  <Stack space={1}>
                    <Text color="gray.300" fontSize={12} paddingTop={1}>
                      UserName:{' '}
                      <Text color="white">{filterData?.userName}</Text>
                    </Text>
                    <Text color="gray.300" fontSize={12} paddingTop={1}>
                      Name : <Text color="white">{filterData?.name}</Text>
                    </Text>
                    <Text color="gray.300" fontSize={12} paddingTop={1}>
                      Description:{' '}
                      <Text color="white">{filterData?.description}</Text>
                    </Text>
                    <HStack>
                      <Text color="gray.300" fontSize={12} paddingTop={1}>
                        Followers Count:{' '}
                      </Text>
                      <Pressable
                        onPress={navigateFlowersHandler}
                        _disabled={{ opacity: 50 }}
                        _pressed={{ opacity: 50 }}>
                        <HStack>
                          <Text color="white">{filterData?.followers} </Text>
                          <Text color="gray.300" fontSize={12} paddingTop={1}>
                            Followers
                          </Text>
                        </HStack>
                      </Pressable>
                    </HStack>
                    <HStack>
                      <Text color="gray.300" fontSize={12} paddingTop={1}>
                        Following Count:{' '}
                      </Text>
                      <Pressable
                        onPress={navigateFollowingHandler}
                        _disabled={{ opacity: 50 }}
                        _pressed={{ opacity: 50 }}>
                        <HStack>
                          <Text color="white">{filterData?.following} </Text>
                          <Text color="gray.300" fontSize={12} paddingTop={1}>
                            Followers
                          </Text>
                        </HStack>
                      </Pressable>
                    </HStack>
                  </Stack>
                </HStack>
              </Stack>
            )}
          </ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </Box>
  );
};

export default Dashboard;
