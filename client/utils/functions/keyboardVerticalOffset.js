import { Platform } from 'react-native';

export const keyboardVerticalOffset = (number) => (Platform.OS === 'ios' ? number : 0);
