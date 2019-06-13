// @ flow
import React from 'react';
import { Text } from 'react-native';
import { compose } from 'react-apollo';
import { withTranslation } from 'react-i18next';

const MusicScreenComponent = () => (
  <Text>Music</Text>
);

export const MusicScreen = compose(
  withTranslation('music screen'),
)(MusicScreenComponent);
