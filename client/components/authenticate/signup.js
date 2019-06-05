// @flow
import React from 'react';
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

type Props = {
  t: Function,
}

export const SignUpComponent = (props: Props) => {
  const { t } = props;

  return (
    <View style={styles.styleContainer}>
      <CommonInput placeholder={t('user name')} />
      <CommonInput placeholder={t('email')} />
      <CommonInput placeholder={t('password')} />
      <CommonInput placeholder={t('confirmation')} />
      <CommonButton>{t('sign up')}</CommonButton>
    </View>
  );
};
