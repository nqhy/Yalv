import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonButton from './common/CommonButton';

export default class Components extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <CommonButton>Login</CommonButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white'
  }
})
