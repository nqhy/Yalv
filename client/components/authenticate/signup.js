// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import { View } from 'react-native';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

import { CommonInput, CommonButton } from '../common';
import { UserMutation } from '../../graphql/mutations/user';
import { withChangeLanguage } from '../../utils/hoc';

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

export const SignUpScreen = compose(
  withTranslation('authenticate'),
  graphql(UserMutation.createUser),
  withChangeLanguage,
)(SignUpComponent);
