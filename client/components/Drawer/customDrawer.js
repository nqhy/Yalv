import React from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

import { drawerStyle } from './styles';
import { LogoDrawerImage } from '../../styles/img';

export const customDrawerComponent = (props) => (
  <SafeAreaView style={drawerStyle.safeArea}>
    <View stlye={drawerStyle.view}>
      <Image source={LogoDrawerImage} style={drawerStyle.image} />
    </View>
    <ScrollView style={drawerStyle.scrollView}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);
