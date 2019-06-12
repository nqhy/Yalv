import { StyleSheet, Dimensions } from 'react-native';

import { color } from '../../../styles/theme';

const ScreenHeight = Dimensions.get('screen').height;
export const headerComponentStyle = StyleSheet.create({
  header: {
    backgroundColor: color.white,
    height: ScreenHeight * 0.12,
  },
});
