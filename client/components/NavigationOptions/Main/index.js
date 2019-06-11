// @ flow
import React from 'react';
import { Image } from 'react-native';

import { withi18nNavigation } from '../../../utils/hoc';
import { homeStyle } from './styles';
import { HomeIcon } from '../../../styles/img';

export const MainNavigationOptions = withi18nNavigation(({ t }) => ({
  drawerLabel: t('title'),
  drawerIcon: () => (
    <Image
      source={HomeIcon}
      style={homeStyle.image}
    />
  ),
}), 'home screen')();
