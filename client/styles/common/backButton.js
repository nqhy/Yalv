import { StyleSheet } from 'react-native';

import { color } from '../theme';

export const backButtonStyle = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  text: {
    fontSize: 40,
    color: color.white,
    fontWeight: 'bold',
  },
});
