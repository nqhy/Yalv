import { StyleSheet } from 'react-native';

import { color } from '../../../styles/theme';

export const drawerStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 200,
    backgroundColor: color.black,
  },
  image: {
    width: 'auto',
    height: 200,
  },
});
