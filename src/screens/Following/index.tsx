import React, { useState, useEffect } from 'react';
import { Box, FlatList, Text } from 'native-base';
import axios from 'axios';
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from '@react-navigation/native';

import { WelcomeStackParamList, UserInterface } from 'types';
import { UserItem } from 'components';

const Following = () => {
  const route = useRoute();
  const [userData, setUserData] = useState<UserInterface>();
  const { navigate } = useNavigation<NavigationProp<WelcomeStackParamList>>();

  const { following_url } = route.params;
  let api_url: string = following_url.slice(0, -13);
  const fetchData = async () => {
    if (api_url === '') {
      return;
    } else {
      let res = await axios.get(api_url);
      let data: Array<UserInterface> = [];
      res?.data.map((item: any) => {
        console.log('>>', item);
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
      <Text textAlign="center" fontWeight="bold" fontSize={20}>
        Followers
      </Text>
      {userData !== null && (
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
      )}
    </Box>
  );
};
export default Following;
