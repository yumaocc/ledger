// 导航器初始化页面
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screen/home';

const Tabs = createBottomTabNavigator({
  screens: {
    screen: HomeScreen,
  },
  // icon处理函数
  // screenOptions: (params) => {
  // },
});

const stackNavigator = createNativeStackNavigator({
  initialRouteName: 'Tabs',
  screens: {
    Tabs: {
      screen: Tabs,
      options: { headerShown: false, title: '首页' },
    },
    Home: {
      screen: HomeScreen,
      options: {
        title: '首页',
        headerBackTitle: '首页',
      },
    },
  },
});

const Navigation = createStaticNavigation(stackNavigator);

export default function Route() {
  return <Navigation />;
}
