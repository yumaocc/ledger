// 导航器初始化页面
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@/screen/home';
import MeScreen from '@/screen/me';
import AddScreen from '@/screen/add';

import Logo from '@/asset/svg/test.svg';
import Me from '@/asset/svg/me.svg';
import Add from '@/asset/svg/add.svg';

const Tabs = createBottomTabNavigator({
  screens: {
    screen: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        tabBarIcon: () => <Logo height={20} width={20} />,
        title: '我的',
      },
    },
    Add: {
      screen: AddScreen,
      options: {
        headerShown: false,
        tabBarIcon: () => <Add height={50} width={50} />,
        title: '',
      },
    },
    MeScreen: {
      screen: MeScreen,
      options: {
        headerShown: false,
        tabBarIcon: () => <Me height={20} width={20} />,
        title: '我的',
      },
    },
  },
});

const stackNavigator = createNativeStackNavigator({
  initialRouteName: 'Tabs',
  screens: {
    Tabs: {
      screen: Tabs,
      options: { headerShown: false },
    },
  },
});

const Navigation = createStaticNavigation(stackNavigator);

export default function Route() {
  return <Navigation />;
}
