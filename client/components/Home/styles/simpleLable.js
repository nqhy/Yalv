import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';
import { ScreenHeight } from '../../../constants/Dimensions';

export const SimpleLabelStyle = StyleSheet.create({
  container: {
    height: ScreenHeight * 0.15,
    left: '10%',
  },
  titleText: {
    fontSize: 37,
    fontWeight: '300',
    marginBottom: '2%',
  },
  subTitleText: {
    fontSize: 20,
    color: color.americanLevel,
  },
});
