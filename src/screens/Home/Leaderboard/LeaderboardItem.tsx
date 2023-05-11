import React, { useState } from 'react';
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
  Input,
  Select,
  CheckIcon,
} from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { BottomTab } from 'components';
import { RootStackParamList } from 'types';

import { Images } from 'assets';

const LeaderboardItem = () => {
  const [hitting, setHitting] = useState<boolean>(true);
  const [pitching, setPitching] = useState<boolean>(false);
  const [defensive, setDefensive] = useState<boolean>(false);

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const goEvaluationItemHandler = () => {
    navigate('HomeNavigation', { screen: 'EventItem' });
  };
  const selectHittingHandler = () => {
    setHitting(true);
    setPitching(false);
    setDefensive(false);
  };
  const selectPitchingHandler = () => {
    setHitting(false);
    setPitching(true);
    setDefensive(false);
  };
  const selectDefensiveHandler = () => {
    setHitting(false);
    setPitching(false);
    setDefensive(true);
  };

  return (
    <Box flex={1}>
      <ScrollView px={6}>
        <Stack space={4}>
          <Stack justifyContent="center" alignItems="center">
            <Text fontSize={20} color="#0a3254" fontWeight="bold">
              August 18, 2022 New Jersey
            </Text>
            <Text fontSize={20} color="#0a3254" fontWeight="bold">
              CSE CAMP
            </Text>
            <Text fontSize={20} color="#0a3254" fontWeight="bold">
              LEADERBOARD
            </Text>
          </Stack>
          <HStack justifyContent="space-around">
            <Pressable
              onPress={selectHittingHandler}
              _disabled={{ opacity: 50 }}
              _pressed={{ opacity: 60 }}>
              <Text color="#0a3254" fontSize={12} fontWeight="bold">
                HITTING
              </Text>
            </Pressable>
            <Pressable
              onPress={selectPitchingHandler}
              _disabled={{ opacity: 50 }}
              _pressed={{ opacity: 60 }}>
              <Text color="#0a3254" fontSize={12} fontWeight="bold">
                PITCHING
              </Text>
            </Pressable>
            <Pressable
              onPress={selectDefensiveHandler}
              _disabled={{ opacity: 50 }}
              _pressed={{ opacity: 60 }}>
              <Text color="#0a3254" fontSize={12} fontWeight="bold">
                DEFENSIVE
              </Text>
            </Pressable>
          </HStack>
          {hitting === true && (
            <Stack space={2}>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Select A Category"
                placeholder="Select A Category"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Filter by Position"
                placeholder="Filter by Position"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Filter by Grad Year"
                placeholder="Filter by Grad Year"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
              <Input maxHeight={8} placeholder="Input GPA" />
            </Stack>
          )}
          {pitching === true && (
            <Stack space={2}>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Select A Category"
                placeholder="Select A Category"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Filter by Position"
                placeholder="Filter by Position"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
            </Stack>
          )}
          {defensive === true && (
            <Stack space={2}>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Select A Category"
                placeholder="Select A Category"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Filter by Position"
                placeholder="Filter by Position"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
              <Select
                selectedValue=""
                minWidth="200"
                maxHeight={8}
                accessibilityLabel="Filter by Grad Year"
                placeholder="Filter by Grad Year"
                _selectedItem={{
                  bg: '#0a3254',
                  endIcon: <CheckIcon size="2" />,
                }}>
                <Select.Item label="CSE Overall" value="Baseball" />
                <Select.Item label="Power Hitting" value="FastPitch" />
                <Select.Item label="Bat Speed" value="FastPitch" />
                <Select.Item label="Median Exit Velocity" value="FastPitch" />
                <Select.Item label="Rot, Acceleration" value="FastPitch" />
              </Select>
            </Stack>
          )}
        </Stack>
      </ScrollView>
      <BottomTab />
    </Box>
  );
};
export default LeaderboardItem;
