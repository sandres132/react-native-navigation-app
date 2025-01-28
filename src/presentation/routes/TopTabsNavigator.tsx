import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';
import { globalColors } from '../theme/theme';
import { Ionicon } from '../components/shared/Ionicon';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
        <HamburguerMenu/>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: globalColors.primary,
            
          }}
        >
        <Tab.Screen
          options={{ title: 'Profile', tabBarIcon: ({ color }) => ( <Ionicon name='person-outline' color={ color } /> ) }}
          name="Profile"
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{ title: 'About Us', tabBarIcon: ({ color }) => ( <Ionicon name='people-outline' color={ color } /> ) }}
          name="About"
          component={AboutScreen}
        />
        </Tab.Navigator>
    </>
  );
}