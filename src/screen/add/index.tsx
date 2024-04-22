import { Button, InputItem, Toast, View } from '@ant-design/react-native';
import { useState } from 'react';
import Key from '@/module/common/Key';
import { StyleSheet } from 'react-native';

const Add = () => {
  const [money, setMoney] = useState<number>(0);
  const handlePress = () => {
    if (money) {
      Toast.info('请输入金额');
    }
    console.log(money);
  };
  return (
    <View style={styles.wrapper}>
      <View />
      <Key />
    </View>
  );
};
export default Add;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
