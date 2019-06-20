// @flow
import React from 'react';
import { View, Text } from 'react-native';

import { SimpleLabelStyle } from './styles';

type Props = {
  t: Function,
}

export const SimpleLabel = (props: Props) => {
  const {
    t,
  } = props;

  return (
    <>
      <View style={SimpleLabelStyle.container}>
        <Text style={SimpleLabelStyle.titleText}>
          {t('title')}
        </Text>
        <Text style={SimpleLabelStyle.subTitleText}>
          {t('sub title')}
        </Text>
      </View>
    </>
  );
};
