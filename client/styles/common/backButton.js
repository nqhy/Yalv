import { StyleSheet } from 'react-native';

import { color } from '../theme';

export const backButtonStyle = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
  text: {
    fontSize: 40,
    color: color.white,
    fontWeight: 'bold',
  },
});
