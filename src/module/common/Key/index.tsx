import { Button, Flex, InputItem, View } from '@ant-design/react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
interface Props {
  onChange?: () => void;
  value?: number;
  onSuccess?: () => void;
}

const Key = (props: Props) => {
  const { onSuccess } = props;

  const [input, setInput] = useState<string>();

  const handleFinish = () => {
    onSuccess?.();
  };

  const handlePress = (value: string) => {
    setInput(input + value);
  };

  const map = [
    [
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('7')}>
            7
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('8')}>
            8
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('9')}>
            9
          </Button>
        ),
      },
      {
        render: () => <Button style={styles.button}>日期</Button>,
      },
    ],
    [
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('4')}>
            4
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('5')}>
            5
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('6')}>
            6
          </Button>
        ),
      },
      {
        render: () => <Button style={styles.button}>+</Button>,
      },
    ],
    [
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('1')}>
            1
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('2')}>
            2
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('3')}>
            3
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('-')}>
            -
          </Button>
        ),
      },
    ],
    [
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('7')}>
            .
          </Button>
        ),
      },
      {
        render: () => (
          <Button style={styles.button} onPress={() => handlePress('0')}>
            0
          </Button>
        ),
      },
      {
        render: () => <Button style={styles.button}>{'<='}</Button>,
      },
      {
        render: () => (
          <Button style={styles.button} onPress={handleFinish}>
            完成
          </Button>
        ),
      },
    ],
  ];

  return (
    <View style={styles.wrapper}>
      <InputItem style={styles.input} value={input} disabled onChange={value => setInput(value)} />
      {map.map(item => (
        <Flex style={{ gap: 10, marginTop: 10 }}>{item.map(element => element.render())}</Flex>
      ))}
    </View>
  );
};
export default Key;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  input: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
