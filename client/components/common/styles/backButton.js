import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';

export const backButtonStyle = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '7%',
    right: '14%',
  },
  text: {
    fontSize: 40,
    color: color.white,
    fontWeight: 'bold',
  },
});
