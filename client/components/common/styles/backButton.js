import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';

export const backButtonStyle = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '-8%',
    right: '5%',
  },
  text: {
    fontSize: 37,
    color: color.white,
    fontWeight: 'bold',
  },
});
