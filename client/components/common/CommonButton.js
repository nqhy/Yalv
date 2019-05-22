import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { commonButton } from '../../styles/common';

export default class CommonButton extends React.Component {
  render() {
    const {
      style: {
        styleText = {},
        styleButton = {},
        styleContainner = {},
      } = {},

    } = this.props;
    return (
      <View style={[commonButton.containner, styleContainner]}>
        <TouchableOpacity style={[commonButton.button, styleButton]}>
          <Text style={[commonButton.text, styleText]}>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
