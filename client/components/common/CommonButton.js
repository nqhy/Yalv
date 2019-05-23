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
      <View style={[buttonSty.container, styleContainer]}>
        <TouchableOpacity style={[buttonSty.button, styleButton]}>
          <Text style={[buttonSty.text, styleText]}>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
