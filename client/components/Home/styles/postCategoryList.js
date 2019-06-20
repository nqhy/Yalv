import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';
import { ScreenHeight } from '../../../constants/Dimensions';

export const PostCategoryListStyle = StyleSheet.create({
  scroll: {
    height: ScreenHeight * 0.1,
    backgroundColor: color.white,
    borderWidth: 0,
  },
  header: {
    height: 30,
    padding: 0,
  },
});
