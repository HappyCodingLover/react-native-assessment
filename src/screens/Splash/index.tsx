import React, { useEffect } from 'react';
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
  Stack,
  Text,
} from 'native-base';
import { GithubIcon } from 'assets';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { WelcomeStackParamList } from 'types';

const Example = () => {
  const { navigate } = useNavigation<NavigationProp<WelcomeStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigate('Dashboard');
    }, 1000);
  }, []);
  return (
    <Stack space={1} justifyContent="center" alignItems="center">
      <GithubIcon width={50} height={50} color="#0D2636" />
      <Text color="#0D2636" fontSize={12} fontWeight="bold">
        Speer Technologies React Native assessment
      </Text>
      <HStack space={2} paddingTop={3} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
      </HStack>
    </Stack>
  );
};

const Splash = () => {
  return (
    <NativeBaseProvider bg="#11161F">
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
export default Splash;
