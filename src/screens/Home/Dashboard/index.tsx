import React, { useEffect } from 'react';
import {
  HStack,
  Stack,
  Box,
  Text,
  Image,
  ScrollView,
  Center,
  FlatList,
} from 'native-base';

import {
  Button,
  More,
  YellowButton,
  BottomTab,
  TextButton,
  DataItem,
} from 'components';
import { Images, EyeHidden } from 'assets';
import { Colors } from 'config';

const Main = () => {
  useEffect(() => {}, []);
  const data = [
    {
      recentText:
        'Carter showed the coaches the (CSE) report when we met with them. We used the report to concentrate off-season training to improve some areas. We also found the mental test (TAP Mental Assessment) results to be very interesting and informative.',
      name: 'Damen Stephenson Parent of a CSE Workout Day Participant',
    },
    {
      recentText:
        'Youth softball needs this (CSE) so badly because it is an equalizer. For the limited budgets and for the people that dont have access, this is the equalizer.',
      name: 'Sue Enquist Former Collegiate Athlete and Coach at UCLA',
    },
    {
      recentText:
        '"Annas work ethic, solid character, and academic strengths were the keys to succeeding in these college opportunities, but a player can have all of that and none of it matters if the coaches dont have a reason to look in their direction.   Athletes like Anna need a way to get on the radar, and I believe CSE was an important instrument in that. "',
      name: 'Eric Jensen \n Parent of a CSE Participant',
    },
  ];
  const SlideData = [
    {
      image: Images.EvaluatingImage,
      title: '',
      time: '',
      nonImage: true,
    },
    {
      image: Images.SlideOneImage,
      title: 'Transfer Portal \n Combine - Zoom \n into June',
      time: 'Friday, May 26',
    },
    {
      image: Images.SlideTwoImage,
      title: 'Memorial Day \n Alliance CSE \n Camp',
      time: 'Friday, June 9',
    },
    {
      image: Images.SlideThreeImage,
      title: 'Memorial Day \n Alliance CSE \n Camp',
      time: 'Friday, June 9',
    },
    {
      image: Images.SlideFourImage,
      title: 'Memorial Day \n Alliance CSE \n Camp',
      time: 'Friday, June 9',
    },
    {
      image: Images.SlideFiveImage,
      title: 'Memorial Day \n Alliance CSE \n Camp',
      time: 'Friday, June 9',
    },
  ];
  const ShowNowHandler = () => {};
  const AboutUsHandler = () => {};
  const tripleHandler = () => {};
  const renderItem = ({ item, index }) => {
    return (
      <Stack
        alignItems="flex-start"
        justifyContent="center"
        position="relative">
        <Image
          height={226}
          width={375}
          source={item.image}
          alt="1-McDonald"
          resizeMode="cover"
          bg="#03172c"
        />
        <Box
          bg="#000000B5"
          opacity={70}
          width={375}
          height={226}
          top={0}
          position="absolute"
          zIndex={9}></Box>
        <Stack
          px={12}
          position="absolute"
          alignItems="center"
          space={3}
          zIndex={99}>
          <Text color="white" fontWeight="bold" fontSize={15}>
            {item.title}
          </Text>
          <Text color="white" fontWeight="bold" fontSize={12}>
            {item.time}
          </Text>
          {item.nonImage !== true && (
            <Button text="Learn More" type="standard" sz="small" />
          )}
        </Stack>
      </Stack>
    );
  };

  const renderFeedback = ({ item }) => {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        space={3}
        bg="#00305c"
        width={350}
        p={3}
        height={300}>
        <Text fontSize={15} color="white" fontWeight="bold">
          {item.recentText}
        </Text>
        <Text px={3} color="#D4B012" fontStyle="italic">
          {item.name}
        </Text>
      </Stack>
    );
  };
  return (
    <Box flex={1}>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={SlideData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
        <Stack px={6} py={4}>
          <Stack pt={3} alignItems="center" space={2}>
            <Text color="#00305C" fontWeight="extrabold">
              EVALUATE. ANALYZE. DEVELOP.
            </Text>
            <Text color="#00305C" fontWeight="bold">
              College Sports Evaluation is the #1 verified data & analytics
              company in sports.
            </Text>
          </Stack>
          <Stack space={3}>
            <Stack alignItems="center" space={2} paddingTop={6}>
              <Text fontSize={20} color="#D4B012" fontWeight="bold">
                YOUTH
              </Text>
              <HStack space={3}>
                <Text color="#00305C" fontSize={20} fontWeight="bold">
                  Athletes Tested
                </Text>
                <Text color="#D4B012" fontSize={20} fontWeight="bold">
                  4300+
                </Text>
              </HStack>
            </Stack>
            <Stack alignItems="center" space={2} paddingBottom={6}>
              <Text fontSize={20} color="#D4B012" fontWeight="bold">
                YOUTH
              </Text>
              <HStack space={3}>
                <Text color="#00305C" fontSize={20} fontWeight="bold">
                  Athletes Tested
                </Text>
                <Text color="#D4B012" fontSize={20} fontWeight="bold">
                  5000+
                </Text>
              </HStack>
            </Stack>
          </Stack>
          <Stack space={2} py={3}>
            <More
              title="YOUTH"
              smallTitle="Evaluations"
              desOne="Data Driven Camp"
              desTwo="Digital Player Reports"
              btnText="SHOP NOW"
              onPress={ShowNowHandler}
            />
            <More
              title="CLUB"
              smallTitle="Testing Packages"
              desOne="Data Driven Camp"
              desTwo="Digital Player Reports"
              btnText="LEARN MORE"
              onPress={ShowNowHandler}
            />
            <More
              title="COLLEGE"
              smallTitle="Program Packages"
              desOne="Data Driven Camp"
              desTwo="Digital Player Reports"
              btnText="LEARN MORE"
              onPress={ShowNowHandler}
            />
          </Stack>
        </Stack>
        <Stack bg="#edeef0" space={2} py={6} alignItems="center">
          <Text
            color="#D4B012"
            borderBottomColor="#D4B012"
            borderBottomWidth={2}
            fontSize={15}>
            VERIFIED SPORTS ANALYTICS
          </Text>
          <Text color="#00305C" px={4}>
            At College Sports Evaluation, data and analytics are the backbone of
            everything we do. Providing youth and collegiate athletes with an
            unparalleled skill set evaluation, our proven process reveals
            data-driven insights into player performance as it compares to the
            collegiate levels.
          </Text>
          <DataItem
            top_text="DATA"
            bottom_text="COLLECTION"
            image={Images.DataCollectionImage}
          />
          <DataItem
            top_text="DATA"
            bottom_text="ANALYSIS"
            image={Images.DataAnalyticsImage}
          />
          <DataItem
            top_text="THE"
            bottom_text="NORMS"
            image={Images.PredictiveAnalyticsImage}
          />

          <YellowButton title="ABOUT US" mt={4} onPress={AboutUsHandler} />
        </Stack>
        <Stack bg="white" alignItems="center" py={12} space={2}>
          <Box borderBottomColor="#D4B012" borderBottomWidth={3} width="95%">
            <Text
              textAlign="center"
              color="#D4B012"
              fontWeight="bold"
              fontSize={20}>
              THE CSE SLIDER
            </Text>
          </Box>
          <Image marginTop={3} source={Images.Slider} />
          <Text color="#00305C" fontWeight="bold" fontSize={20}>
            The CSE Slider
          </Text>
          <Text px={4} color="#00305C" fontWeight="bold" fontSize={15}>
            Our evaluations put sensor data in the hands of coaches and athletes
            to better inform developmental needs and drive a competitive
            advantage at the collegiate level. Results are displayed on The CSE
            Slider providing a visual representation of what college division
            level an athlete’s skill sets compare to. The ranking is based off
            of a scale ranging from 20 to 80 that can be calculated from a
            combination of both the objective and subjective results.
          </Text>
          <YellowButton mt={4} title="LEARN MORE" />
        </Stack>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderFeedback}
        />

        <Stack bg="white" alignItems="center" space={6} paddingTop={6}>
          <Image source={Images.TripleImage} width={140} height={140} />
          <Stack alignItems="center">
            <Text>College Sports Evaluation is partnered with </Text>
            <TextButton
              fontWeight="bold"
              fontSize={12}
              onPress={tripleHandler}
              color={Colors.standard}
              text="Triple Crown Sports"
            />
          </Stack>
          <Stack px={12}>
            <Stack alignItems="center" space={2}>
              <TextButton
                fontWeight="bold"
                fontSize={12}
                onPress={tripleHandler}
                color={Colors.standard}
                text="Terms & Conditions | Refund Policy"
              />
              <HStack space={2}>
                <EyeHidden />
                <TextButton
                  fontWeight="bold"
                  fontSize={12}
                  onPress={tripleHandler}
                  color={Colors.standard}
                  text="Privacy Policy"
                />
              </HStack>
            </Stack>
            <Center py={6}>
              <Text
                textAlign="center"
                color="#00305C"
                fontWeight="bold"
                fontSize={12}>
                © 2020 College Sports Evaluation. All rights Reserved.
              </Text>
            </Center>
          </Stack>
        </Stack>
      </ScrollView>
      <BottomTab />
    </Box>
  );
};

export default Main;
