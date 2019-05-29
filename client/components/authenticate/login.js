import React from 'react';
import { View } from 'react-native';

import { CommonInput } from '../common';

const styles = {
  styleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
};

export const LoginScreen = () => (
  <View style={styles.styleContainer}>
    <CommonInput style={styles} />
  </View>
);
