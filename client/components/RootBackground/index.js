import React from 'react';
import { ImageBackground } from 'react-native';

import { RootBackgroundImage } from '../../styles/img';

export const RootBackground = () => (
  <ImageBackground source={RootBackgroundImage} style={{ width: '100%', height: '100%' }} />
);
