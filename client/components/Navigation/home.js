import React from 'react';
import { Image } from 'react-native';

import { homeStyle } from './styles';
import { HomeIcon } from '../../styles/img';

export const homeNavigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: () => (
    <Image
      source={HomeIcon}
      style={homeStyle.image}
    />
  ),
};
