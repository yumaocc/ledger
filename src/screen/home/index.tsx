import { View, Text } from 'react-native';
import React from 'react';
import { Form } from '../../module/common/Form';
import { InputItem } from '@ant-design/react-native';
import { useForm } from 'react-hook-form';

export default function Home() {
  const form = useForm();
  return (
    <View>
      <Form {...form}>
        <Form.Item name="a" rules={{ required: '请输入手机号' }}>
          <InputItem />
        </Form.Item>
      </Form>
      <Text>首页</Text>
    </View>
  );
}
