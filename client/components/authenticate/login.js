import React from 'react';
import { View } from 'react-native';

import { CommonInput, CommonButton, LoadingSpine } from '../common';

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
    <CommonButton>Hello</CommonButton>
    <LoadingSpine sourceImg={require('../../styles/img/loadingSpine.png')} />
  </View>
);
