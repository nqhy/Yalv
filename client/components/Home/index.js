// @ flow
import React from 'react';
import { Text } from 'react-native';
import { compose } from 'react-apollo';
import { withTranslation } from 'react-i18next';

import { withHeaderComponenent } from '../common/withHeaderComponent';

const HomeScreenComponent = () => (
  <Text>Hello</Text>
);

export const HomeScreen = compose(
  withTranslation('home screen'),
  withHeaderComponenent
)(HomeScreenComponent);