import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, Splash, Followers, Following, ProfileView } from 'screens';
import { WelcomeStackParamList } from 'types';
import { Header, TestHeader } from 'components';

const WelcomeStack = createStackNavigator<WelcomeStackParamList>();

const WelcomeNavigation = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerStyle: { display: 'none' },
      }}>
      <WelcomeStack.Screen name="Splash" component={Splash} />
      <WelcomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ header: TestHeader }}
      />
      <WelcomeStack.Screen
        name="Followers"
        component={Followers}
        options={{ header: Header }}
      />
      <WelcomeStack.Screen
        name="Following"
        component={Following}
        options={{ header: Header }}
      />
      <WelcomeStack.Screen
        name="ProfileView"
        component={ProfileView}
        options={{ header: Header }}
      />
    </WelcomeStack.Navigator>
  );
};

export default WelcomeNavigation;
