import React, { useContext, useMemo } from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { FormContext } from '../index';
import { View } from '@ant-design/react-native';
import { StyleSheet } from 'react-native';

export interface FormItemType extends UseControllerProps {
  children?: JSX.Element;
  label?: string;
  labelWidth?: number;
  labelAlgin?: 'right' | 'left';
}

const LABEL_WIDTH = 100;

const LABEL_ALGIN = 'left';

export default function FormItem(props: FormItemType) {
  const { children, ...formItemProps } = props;

  const formProps = useContext(FormContext)!;

  const { formState } = formProps;

  const { errors } = formState;

  const labelWidth = useMemo(() => formProps.labelWidth || formItemProps.labelWidth || LABEL_WIDTH, [formProps.labelWidth, formItemProps.labelWidth]);

  const labelAlgin = useMemo(() => formProps.labelAlgin || formItemProps.labelAlgin || LABEL_ALGIN, [formProps.labelAlgin, formItemProps.labelAlgin]);

  return (
    <>
      <View style={style.wrapper}>
        <View style={[style.label, { width: labelWidth, textAlign: labelAlgin }]}>{props.label}</View>
        <Controller
          {...formProps}
          {...formItemProps}
          render={({ field }) => {
            return React.cloneElement(children!, { ...field, style: style.value });
          }}
        />
      </View>
      {errors[props?.name] ? <View style={style.error}>error</View> : <></>}
    </>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    marginLeft: 20,
  },
  value: {
    flex: 1,
  },
  error: {
    marginTop: -15,
    color: '#ff1929',
  },
});
