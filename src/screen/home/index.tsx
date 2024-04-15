import { View, Text, Animated } from 'react-native';
import React from 'react';
import ScrollView = Animated.ScrollView;

export default function Home() {
  return (
    <View>
      <Text>首页</Text>
      <ScrollView style={{ backgroundColor: '#fff' }}> </ScrollView>
    </View>
  );
}
