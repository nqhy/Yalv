import React, { useEffect } from 'react';
import { graphql } from 'react-apollo';
import { View } from 'react-native';

import { CommonInput, CommonButton } from '../common';
import { UserMutation } from '../../graphql/mutations/user';

const styles = {
  styleContainer: {
    flex: 0.7,
    marginTop: 150,
    alignItems: 'center',
    backgroundColor: 'white',
  },
};

export const SignUpComponent = () => {
  useEffect(() => {
    // Do Nothing
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

export const SignUpScreen = graphql(UserMutation.createUser)(SignUpComponent);
