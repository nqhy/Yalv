import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';

export const PostCategoryListStyle = StyleSheet.create({
  scrollHeader: {
    height: '3%',
    backgroundColor: color.black,
    borderWidth: 0,
  },
  scroll: {
    height: '90%',
    flexDirection: 'column',
    backgroundColor: color.black,
  },
  header: {
    height: 30,
    padding: 0,
  },
});
