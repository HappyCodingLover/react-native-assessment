import React, { useState, useEffect } from 'react';
import {
  Box,
  FlatList,
  HStack,
  Text,
  ScrollView,
  Spinner,
  Stack,
} from 'native-base';
import axios from 'axios';
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from '@react-navigation/native';

import { UserItem } from 'components';
import { WelcomeStackParamList, UserInterface } from 'types';

const Followers = () => {
  const route = useRoute();
  const { navigate } = useNavigation<NavigationProp<WelcomeStackParamList>>();
  const [userData, setUserData] = useState<UserInterface>();
  const [found, setFound] = useState<boolean>(false);
  const { followers_url } = route.params;

  const fetchData = async () => {
    if (followers_url === '') {
      return;
    } else {
      let res = await axios.get(followers_url);
      let data: Array<UserInterface> = [];
      // if (res?.data.length <= 2) {
      //   setFound(true);
      //   console.log('>>>', res?.data.length);
      //   return;
      // }

      res?.data.map((item: any) => {
        data.push({
          avatar: item.avatar_url,
          userName: item.login,
          name: item.name,
          company: item.company,
          location: item.location,
        });
      });
      setUserData(data);
    }
  };
  const NavigateProfileView = index => {
    navigate('WelcomeNavigation', {
      screen: 'ProfileView',
      params: { userName: userData[index].userName },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box flex={1} px={6}>
      <ScrollView>
        <Text textAlign="center" fontWeight="bold" fontSize={20}>
          Followers
        </Text>
        {found === true && (
          <Stack>
            <Text color="black" fontSize={24}>
              Not Found
            </Text>
          </Stack>
        )}
        {userData !== null && found === false ? (
          <FlatList
            data={userData}
            renderItem={({ item, index }) => (
              <UserItem
                item={item}
                index={index}
                onPress={() => {
                  NavigateProfileView(index);
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <HStack space={2} paddingTop={3} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
          </HStack>
        )}
      </ScrollView>
    </Box>
  );
};
export default Followers;
