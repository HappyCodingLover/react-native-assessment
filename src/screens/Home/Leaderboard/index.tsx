import React, { useEffect, useState } from 'react';
import {
  HStack,
  Stack,
  Box,
  Text,
  Pressable,
  Image,
  ScrollView,
  Center,
  FlatList,
} from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Button, Label, BottomTab, LeaderboardItem } from 'components';
import { RootStackParamList } from 'types';
import { Images } from 'assets';

const Leaderboard = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const goLeaderboardItemHandler = () => {
    navigate('HomeNavigation', { screen: 'LeaderboardItem' });
  };
  return (
    <Box flex={1}>
      <ScrollView px={6}>
        <Stack justifyContent="center" alignItems="center">
          <Stack paddingTop={3} justifyContent="center" alignItems="center">
            <Text fontSize={20} fontWeight="bold" color="#1A202C">
              Find your Full CSE
            </Text>
            <Text fontSize={20} fontWeight="bold" color="#1A202C">
              Leaderboard
            </Text>
            <Text fontSize={14} color="#A0AEC0">
              CSE participants can track their performance through the certified
              CSE Leaderboards. {'\n'} Each CSE evaluation will rank players
              according to sensor data metrics and overall CSE Scores. Find your
              event below and track your ranking!
            </Text>
          </Stack>
        </Stack>
        <Stack space={2} py={6}>
          <LeaderboardItem
            date="November 18, 2022"
            topTitle="November 18, 2022 TC Don Battles"
            bottomTitle="On CSE Camp"
            topSmallTitle="Big League Dreams, Chino"
            bottomSmallTitle="Full CSE - Fastpitch"
            onPress={goLeaderboardItemHandler}
          />
          <LeaderboardItem
            date="November 05, 2022"
            topTitle="Valley Kids Fastpitch "
            bottomTitle="On CSE Camp"
            topSmallTitle="Big League Dreams, Chino"
            bottomSmallTitle="Full CSE - Fastpitch"
            onPress={goLeaderboardItemHandler}
          />
          <LeaderboardItem
            date="August 23, 2022"
            topTitle="Colorado High School Showcase"
            bottomTitle="On CSE Camp"
            topSmallTitle="Big League Dreams, Chino"
            bottomSmallTitle="Full CSE - Fastpitch"
            onPress={goLeaderboardItemHandler}
          />
          <LeaderboardItem
            date="November 05, 2022"
            topTitle="Valley Kids Fastpitch "
            bottomTitle="On CSE Camp"
            topSmallTitle="Big League Dreams, Chino"
            bottomSmallTitle="Full CSE - Fastpitch"
            onPress={goLeaderboardItemHandler}
          />
          <LeaderboardItem
            date="November 18, 2022"
            topTitle="November 18, 2022 TC Don Battles"
            bottomTitle="On CSE Camp"
            topSmallTitle="Big League Dreams, Chino"
            bottomSmallTitle="Full CSE - Fastpitch"
            onPress={goLeaderboardItemHandler}
          />
          <LeaderboardItem
            date="November 05, 2022"
            topTitle="Valley Kids Fastpitch "
            bottomTitle="On CSE Camp"
            topSmallTitle="Big League Dreams, Chino"
            bottomSmallTitle="Full CSE - Fastpitch"
            onPress={goLeaderboardItemHandler}
          />
        </Stack>
      </ScrollView>
      <BottomTab />
    </Box>
  );
};

export default Leaderboard;
