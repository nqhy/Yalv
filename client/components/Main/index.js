// @ flow
import React from 'react';
import { View, Text } from 'react-native';

import { withHeaderComponenent } from '../common/withHeaderComponent';

const MainScreenComponent = () => (
  <View stlye={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello</Text>
  </View>
);

export const MainScreen = withHeaderComponenent(MainScreenComponent);
