import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import {
  Box,
  Text,
  StatusBar,
  Stack,
  FlatList,
  ScrollView,
  Image,
} from 'native-base';

import { BottomTab, Button, Label } from 'components';
import { RootStackParamList } from 'types';
import { Images, Logo } from 'assets';

const AboutUs = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Box flex={1}>
      <ScrollView px={3}>
        <Logo width={150} height={125} />
        <Image
          source={Images.OnboardingImage}
          height={250}
          resizeMode="cover"
        />
        <Stack paddingTop={6} space={3}>
          <Text
            textAlign="center"
            fontSize={20}
            colro="#0a3254"
            fontWeight="bold">
            WHO WE ARE
          </Text>
          <Text
            textAlign="center"
            fontSize={12}
            colro="#0a3254"
            fontWeight="bold">
            The CSE Team is located throughout the United States so we are
            always just around the corner. We are all parents who genuinely
            connect with the purpose of helping our customers find their way to
            “their sweet spot”.
          </Text>
        </Stack>
      </ScrollView>
      <BottomTab />
    </Box>
  );
};

export default AboutUs;
