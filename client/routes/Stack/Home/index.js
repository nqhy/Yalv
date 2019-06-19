import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../../containers/Home';
import { defaultNavigationOptions } from '../commonOptions';

export const HomeScreenNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions,
  },
);
