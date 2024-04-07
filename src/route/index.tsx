// 导航器初始化页面
import {NavigationContainer, createStaticNavigation} from '@react-navigation/native';
import React from 'react';
import {stackNavigator} from './stackNavigator';

const Navigation = createStaticNavigation(stackNavigator);

export default function Route() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
