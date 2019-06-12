// @ flow
import React from 'react';
import { Image } from 'react-native';

import { withi18nNavigation } from '../../../utils/hoc';
import { mainStyle } from './styles';

export const DrawerNavigationOptions = (name, image) => withi18nNavigation(({ t }) => ({
  drawerLabel: t(name),
  drawerIcon: () => (
    <Image
      source={image}
      style={mainStyle.image}
    />
  ),
}), 'drawer navigation')();
