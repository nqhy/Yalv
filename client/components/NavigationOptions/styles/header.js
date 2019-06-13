import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';
import { ScreenHeight } from '../../../constants/Dimensions';

export const headerComponentStyle = StyleSheet.create({
  header: {
    backgroundColor: color.white,
    height: ScreenHeight * 0.12,
  },
});
