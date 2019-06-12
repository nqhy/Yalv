// @flow
import React from 'react';
import { Right, Icon } from 'native-base';
import { withi18nNavigation } from '../../../utils/hoc';
import { homeStyle } from './styles';

type Props = {
  navigation: Object,
  t: Function
}

export const HeaderComponenent = (namespacei18n = '') => withi18nNavigation((props: Props) => {
  const { navigation: { openDrawer = () => null } = {} } = props;
  return (
    <Right style={homeStyle.icon}>
      <Icon name="ios-menu" onPress={() => openDrawer()} />
    </Right>
  );
}, namespacei18n);
