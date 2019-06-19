// @flow
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Right, Left, Icon } from 'native-base';
import { connect } from 'react-redux';

import { withi18nNavigation } from '../../../utils/hoc';
import { homeStyle } from './styles';
import { IconAvatar } from '../../../styles/img';
import { userSelector } from '../../../selectors/authSelector';

type Props = {
  navigation: Object,
  t: Function
}

export const HeaderComponent = (namespacei18n = '') => connect(userSelector)(withi18nNavigation((props: Props) => {
  const { navigation: { openDrawer = () => null } = {}, user: { username } } = props;
  return (
    <>
      <Left>
        <View style={homeStyle.contentUserInfo}>
          <Image source={IconAvatar} style={homeStyle.avatarImg} />
          <Text style={homeStyle.textNameUser}>{username}</Text>
        </View>
      </Left>
      <Right style={homeStyle.icon}>
        <Icon name="ios-menu" onPress={() => openDrawer()} />
      </Right>
    </>
  );
}, namespacei18n));
