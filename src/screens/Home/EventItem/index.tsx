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
  Input,
  Select,
  CheckIcon,
  ITextProps,
} from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { BottomTab, Button, EvaluatingItem, EventItemPan } from 'components';
import { RootStackParamList } from 'types';

import { Images, RapsodoLogo } from 'assets';

type Props = ITextProps & {
  width?: string;
  icon?: any;
  onPress?: () => void;
};
const EventItem = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const buyCampHandler = () => {};
  return (
    <Box flex={1}>
      <ScrollView px={6} py={4}>
        <Stack>
          <Text>College Sports Evaluation Presents</Text>
          <Text color="#111827" fontWeight="extrabold" fontSize={20}>
            May 26, 2023 Memorial Day Alliance CSE Camp
          </Text>
          <Stack>
            <Stack>
              <Text fontSize={12} fontWeight="bold">
                Event Date
              </Text>
              <Text fontSize={12} color="gray.600">
                May 26, 2023
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={12} fontWeight="bold">
                Event Start Time:
              </Text>
              <Text fontSize={12} color="gray.600">
                5:00PM America/Los_Angeles
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={12} fontWeight="bold">
                Event End Time:
              </Text>
              <Text fontSize={12} color="gray.600">
                10:00PM America/Los_Angeles
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={12} fontWeight="bold">
                Event Date
              </Text>
              <Text fontSize={12} color="gray.600">
                May 26, 2023
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={12} fontWeight="bold">
                Event Venue:
              </Text>
              <Text fontSize={12} color="gray.600">
                Jim Elliot High School
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={12} fontWeight="bold">
                Event Address
              </Text>
              <Text fontSize={12} color="gray.600">
                2695 W Vine St Lodi, Ca 95242
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={12} fontWeight="bold">
                Sport
              </Text>
              <Text fontSize={12} color="gray.600">
                Fastpitch
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack paddingTop={6} space={3}>
          <EventItemPan
            title="Camp Only"
            price="195.00"
            btnText="Buy Camp Only"
            onPress={buyCampHandler}
          />
          <EventItemPan
            title="Camp Only + Sensor Data"
            price="295.00"
            btnText="Buy Camp + Sensor Data"
            onPress={buyCampHandler}
          />
          <EventItemPan
            title="Camp + Full CSE Report"
            price="495.00"
            btnText="Buy Camp + Full CSE Report"
            onPress={buyCampHandler}
          />
        </Stack>
        <Stack py={6} alignItems="center" px={3}>
          <Text color="#111827" fontSize={20} fontWeight="bold">
            The CSE Camp Experience
          </Text>
          <Text fontSize={14}>
            {' '}
            With a CSE Camp, athlete's receive an unparalleled college-level
            evaluation followed by the opportunity to receive an individualized
            report including thorough insight into their performance.{' '}
          </Text>
          <Stack alignItems="center" justifyContent="center">
            <Image source={Images.GroupImage} height={375} alt="GroupImage" />
            <Text color="#111827" fontSize={12}>
              {' '}
              *The CSE Report is only accessible to athletes who purchase the
              Camp + Full CSE Report.{' '}
            </Text>
          </Stack>
          <Stack>
            <Text color="#111827" fontSize={20} fontWeight="bold">
              CSE Camp Day
            </Text>
            <Text color="#111827" fontSize={12}>
              Unlike any evaluation on the market, the CSE Camp gives athletes
              in-depth insight into their developmental needs as they work their
              way up to the collegiate levels. During a CSE Camp, athletes
              capture both objective (sensor data) and subjective (analysis from
              a College Coach Evaluator) measurements:
            </Text>
            <Text color="#111827" fontSize={16} fontWeight="bold">
              Sensor Data
            </Text>
            <Text color="#111827" fontSize={12}>
              CSE partners with top sensor data technology including Blast
              Motion and Rapsodo to capture objective measurements. The Ryzer
              Mindset TAP Test is also used to assess athletes’ mental strength.
            </Text>
            <Text color="#111827" fontSize={16} fontWeight="bold">
              College Coach Evaluator
            </Text>
            <Text color="#111827" fontSize={12}>
              Every athlete will be paired with a College Coach Evaluator in
              groups of 6 athletes to 1 coach. The College Coach Evaluator will
              provide a subjective analysis of each athletes’ performance
              according to their ability to read and react to the game during
              position specific drills and a scrimmage.
            </Text>
            <HStack>
              <Image
                source={Images.RyzerImage}
                width="1/3"
                height={50}
                height={100}
                resizeMode="contain"
              />
              <Image
                source={Images.BlastLogoImage}
                width="1/3"
                height={100}
                resizeMode="contain"
              />
              <Image
                source={Images.RapsodoLogoImage}
                width="1/3"
                height={100}
                resizeMode="contain"
              />
            </HStack>
          </Stack>
          <Stack>
            <Text color="#111827" fontSize={20} fontWeight="bold">
              An Inside View
            </Text>
            <Text color="#111827" fontSize={12} fontWeight="bold">
              Take a look at a CSE Camp in full swing!
            </Text>
            <Image
              source={Images.ViewImage}
              height={175}
              borderRadius={7}
              resizeMode="contain"
            />
            <Text color="#111827" fontSize={20} fontWeight="bold">
              Post-Camp Deliverables
            </Text>
            <Text color="#111827" fontSize={12} fontWeight="bold">
              Every athlete who participates in the CSE Camp will have their
              results displayed on the public facing CSE National Leaderboard
              {'\n'}
              Following the CSE Camp, athletes will receive individual results
              in their Player Portal according to which level they registered
              for:
            </Text>
          </Stack>
          <Stack paddingTop={6}>
            <Text color="#111827" fontSize={20} fontWeight="bold">
              Price Comparison
            </Text>
            <Text color="#111827" fontSize={12} fontWeight="bold">
              Day of, every athlete will receive a full evaluation. Following
              the CSE, you get to decide which deliverables you would like
              included in your player profile.
            </Text>
          </Stack>
          <Stack space={3} paddingTop={5}>
            <EventItemPan
              title="Camp Only + Sensor Data"
              price="195.00"
              btnText="Buy Camp Only"
              onPress={buyCampHandler}
            />
            <EventItemPan
              title="Camp Only"
              price="295.00"
              btnText="Buy Camp + Sensor Data"
              onPress={buyCampHandler}
            />
            <EventItemPan
              title="Camp + Full CSE Report"
              price="495.00"
              btnText="Buy Camp + Full CSE Report"
              onPress={buyCampHandler}
            />
          </Stack>
        </Stack>
      </ScrollView>
      <BottomTab />
    </Box>
  );
};

export default EventItem;
