import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Components extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>Init Components</Text>
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
