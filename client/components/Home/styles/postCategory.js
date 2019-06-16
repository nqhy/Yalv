import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';

export const PostCategoryStyle = StyleSheet.create({
  firstButton: {
    marginLeft: 30,
  },
  button: {
    width: 'auto',
    marginRight: 70,
    marginTop: 20,
    height: 'auto',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: color.white,
  },
});
