import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
      options: {headerShown: false},
    },
    Home: {
      screen: HomeScreen,
      options: {
        title: '首页',
      },
    },
  },
});

export {stackNavigator};
