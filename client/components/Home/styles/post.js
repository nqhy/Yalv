import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';
import { ScreenWidth, ScreenHeight } from '../../../constants/Dimensions';

export const PostStyle = StyleSheet.create({
  button: {
    width: ScreenWidth * 0.97,
    height: ScreenHeight * 0.2,
    marginBottom: ScreenHeight * 0.05,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: color.white,
    fontSize: 25,
    top: '70%',
    left: '40%',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
