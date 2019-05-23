import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { buttonStyle } from '../../styles/common';

export default class CommonButton extends React.Component {
  render() {
    const {
      style: {
        styleText = {},
        styleButton = {},
        styleContainer = {},
      } = {},
    } = this.props;
    return (
      <View style={[buttonStyle.container, styleContainer]}>
        <TouchableOpacity style={[buttonStyle.button, styleButton]}>
          <Text style={[buttonStyle.text, styleText]}>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
