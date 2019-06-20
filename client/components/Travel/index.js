// @flow
import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import { TravelDetailStyle } from './style';
import { FirstAllWords } from '../../utils/function';

type Props = {
  navigation: Object,
}

export const TravelDetail = (props: Props) => {
  const { navigation } = props;
  const data = navigation.getParam('data', {});
  const { background, content = '', title = '' } = data;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ImageBackground
        source={{ uri: background }}
        style={TravelDetailStyle.image}
        imageStyle={{ borderBottomRightRadius: TravelDetailStyle.image.borderBottomRightRadius }}
      >
        <TouchableOpacity style={TravelDetailStyle.iconContainer} onPress={() => handleGoBack()}>
          <Icon name="ios-arrow-back" style={TravelDetailStyle.icon} />
        </TouchableOpacity>
        <View style={TravelDetailStyle.contentView}>
          <Text style={TravelDetailStyle.contentText}>
            {FirstAllWords(content)}
          </Text>
          <Text style={TravelDetailStyle.titleText}>
            {FirstAllWords(title)}
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};
