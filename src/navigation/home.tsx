import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Main,
  Leaderboard,
  FindEvaluation,
  Groups,
  EventItem,
  LeaderboardItem,
  AboutUs,
} from 'screens';
import { HomeHeader } from 'components';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'none' },
      }}>
      <Tab.Screen
        name="Main"
        options={{ header: HomeHeader }}
        component={Main}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          header: HomeHeader,
        }}
      />
      <Tab.Screen
        name="FindEvaluation"
        component={FindEvaluation}
        options={{
          header: HomeHeader,
        }}
      />
      <Tab.Screen
        options={{
          header: HomeHeader,
        }}
        name="EventItem"
        component={EventItem}
      />
      <Tab.Screen
        options={{
          header: HomeHeader,
        }}
        name="LeaderboardItem"
        component={LeaderboardItem}
      />
      <Tab.Screen
        options={{
          header: HomeHeader,
        }}
        name="AboutUs"
        component={AboutUs}
      />

      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          header: HomeHeader,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
