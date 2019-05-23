import React from 'react';
import { View, TextInput } from 'react-native';

import { inputStyle } from '../../styles/common';

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
      <View style={[inputStyle.container, styleContainer]}>
        <TextInput
          style={[inputStyle.input, styleInput]}
          selectionColor={selectionColor}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholderText}
        />
      </View>
    )
  }
}