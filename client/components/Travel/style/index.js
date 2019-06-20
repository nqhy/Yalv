import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';
import { ScreenHeight, ScreenWidth } from '../../../constants/Dimensions';

export const TravelDetailStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    top: '7%',
    left: '7%',
  },
  icon: {
    fontSize: 40,
    color: color.white,
  },
  contentView: {
    top: ScreenHeight * 0.33,
    height: '100%',
    backgroundColor: color.white,
    borderTopLeftRadius: 350,
  },
  titleText: {
    top: '10%',
    fontSize: 27,
    left: ScreenWidth * 0.37,
  },
  contentText: {
    top: '20%',
    fontSize: 17,
    color: color.americanLevel,
    left: ScreenWidth * 0.37,
  },
});
