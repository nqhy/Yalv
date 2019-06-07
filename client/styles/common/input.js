import { StyleSheet } from 'react-native';

import { color } from '../theme';

export const inputStyle = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: color.illusion,
    backgroundColor: color.white,
    borderRadius: 30,
    width: 240,
    height: 50,
    fontSize: 20,
    padding: 10,
    color: color.black,
  },
});
