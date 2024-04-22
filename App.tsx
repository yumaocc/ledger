import Route from './src/route';
import * as React from 'react';
import { Provider } from '@ant-design/react-native';
export default function App() {
  return (
    <Provider>
      <Route />
    </Provider>
  );
}
