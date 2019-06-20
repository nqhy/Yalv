import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';
import { ScreenWidth, ScreenHeight } from '../../../constants/Dimensions';

export const PostStyle = StyleSheet.create({
  firstButton: {
    marginLeft: ScreenWidth * 0.07,
  },
  button: {
    width: ScreenWidth * 0.6,
    height: ScreenHeight * 0.45,
    marginLeft: ScreenWidth * 0.05,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  containerText: {
    top: '5%',
    left: '33%',
  },
  text: {
    color: color.white,
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
