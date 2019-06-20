import { StyleSheet } from 'react-native';
import { WindowWidth } from '../../../constants/Dimensions';

export const loadingSpineStyle = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: WindowWidth * 0.45,
  },
});
