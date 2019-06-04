import React, { useEffect } from 'react';
import { View } from 'react-native';

import { CommonInput, CommonButton } from '../common';

const styles = {
  styleContainer: {
    flex: 0.7,
    marginTop: 150,
    alignItems: 'center',
    backgroundColor: 'white',
  },
};

export const SignUpScreen = () => {
  useEffect(() => {
    // Do nothing Now
  }, []);

  return (
    <View style={styles.styleContainer}>
      <CommonInput placeholder="User Name" />
      <CommonInput placeholder="Email" />
      <CommonInput placeholder="Password" />
      <CommonInput placeholder="Confirmation" />
      <CommonButton>Sign Up</CommonButton>
    </View>
  );
};
