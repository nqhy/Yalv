import React from 'react';
import { View, TextInput } from 'react-native';

import { inputSty } from '../../styles/common';

export default class CommonInput extends React.Component {
  render() {
    const {
      style: {
        styleContainer = {},
        styleInput = {},
      } = {},
      selectionColor = "pink",
      placeholderTextColor = "pink",
      placeholderText = "Common Input ..."
    } = this.props;
    return (
      <View style={[inputSty.container, styleContainer]}>
        <TextInput
          style={[inputSty.input, styleInput]}
          selectionColor={selectionColor}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholderText}
        />
      </View>
    )
  }
}