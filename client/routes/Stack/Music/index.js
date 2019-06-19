import { createStackNavigator } from 'react-navigation';

import { MusicScreen } from '../../../components/Music';
import { defaultNavigationOptions } from '../commonOptions';

export const MusicScreenNavigation = createStackNavigator(
  {
    Music: {
      screen: MusicScreen,
    },
  },
  {
    initialRouteName: 'Music',
    defaultNavigationOptions,
  },
);
