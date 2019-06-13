// @flow
import React from 'react';
import { Image, View } from 'react-native';

import { TabBarIcons } from '../../../styles/img';
import { BottomTabStyle } from './style';

type Props = {
  navigation: Function
}

export const BottomTabIcon = (props: Props) => {
  const { navigation: { state: { routeName } } } = props;
  return {
    tabBarIcon: ({ focused }: TabBarProps) => {
      const sourceImage = focused
        ? TabBarIcons[routeName]['active']
        : TabBarIcons[routeName]['unactive'];

      return (
        <View>
          <Image source={sourceImage} style={BottomTabStyle.image} />
        </View>
      );
    },
  };
};
