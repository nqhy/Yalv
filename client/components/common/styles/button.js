import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';


export const buttonStyle = StyleSheet.create({
  button: {
    borderColor: color.black,
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    width: 150,
    height: 'auto',
    backgroundColor: color.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: color.illusion,
    fontWeight: 'bold',
  },
});
