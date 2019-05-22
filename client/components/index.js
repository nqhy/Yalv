import React from 'react';
import { View, StyleSheet } from 'react-native';

import CommonInput from './common/CommonInput';
import CommonButton from './common/CommonButton';

export default class Components extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <CommonInput />
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
