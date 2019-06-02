import React from 'react';
import { View } from 'react-native';

import { CommonInput, CommonButton } from '../common';
import { LoadingSpine } from '../common/LoadingSpine';

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
    <CommonButton>Helo</CommonButton>
    <LoadingSpine sourceImg={require('../../styles/img/loadingSpine.png')} />
  </View>
);
