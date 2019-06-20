import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';

export const PostCategoryStyle = StyleSheet.create({
  firstButton: {
    marginLeft: 25,
  },
  button: {
    marginRight: 25,
    marginTop: 20,
    borderRadius: 25,
    height: 30,
    width: 70,
    backgroundColor: color.black,
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: color.white,
  },
});
