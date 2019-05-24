import React from 'react';
import { View } from 'react-native';

import { CommonInput } from './common';

const styles = {
  styleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
};

export default class Components extends React.Component {
  render() {
    return (
      <View style={styles.styleContainer}>
        <CommonInput style={styles} />
      </View>
    );
  }
}
