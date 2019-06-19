import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';

export const PostCategoryStyle = StyleSheet.create({
  firstButton: {
    marginLeft: 25,
  },
  button: {
    width: 70,
    marginRight: 25,
    marginTop: 20,
    height: 35,
    padding: '2%',
    borderRadius: 25,
    backgroundColor: color.white,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: color.black,
  },
});
