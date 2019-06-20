// @flow
import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import { TravelDetailStyle } from './style';
import { BackButton } from '../common';

type Props = {
  background: String,
  content: String,
  title: String,
}

export const TravelDetail = (props: Props) => {
  const { background, content, title } = props;
  const backbuttonText = '<';
  return (
    <>
      <ImageBackground source={{ uri: background }} style={{ width: '100%', height: '100%' }}>
        <BackButton
          style={
            {
              styleButton: TravelDetailStyle.buttonBack,
              styleText: TravelDetailStyle.buttonBackText,
            }
          }
        >
          {backbuttonText}
        </BackButton>
        <View style={TravelDetailStyle.titleView}>
          <Text style={TravelDetailStyle.titleText}>
            {title}
          </Text>
        </View>
        <View style={TravelDetailStyle.contentView}>
          <Text style={TravelDetailStyle.contentText}>
            {content}
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};
