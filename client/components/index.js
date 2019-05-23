import React from 'react';
import { View, StyleSheet } from 'react-native';

import CommonInput from './common/CommonInput';
import CommonButton from './common/CommonButton';

export default class Components extends React.Component {
  render() {
    return(
      <View style={styles.styleContainer}>
        <CommonInput style={styles}/>
      </View>
    )
  }
}

const styles = {
  styleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
}
