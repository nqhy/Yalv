import { createBottomTabNavigator } from 'react-navigation';

import { HomeScreenNavigation, MusicScreenNavigation } from '../Stack';
import { BottomTabIcon } from '../../components/NavigationOptions/BottomTabIcon';

export const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenNavigation,
    },
    Music: {
      screen: MusicScreenNavigation,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
    },
    defaultNavigationOptions: BottomTabIcon,
  },
);
