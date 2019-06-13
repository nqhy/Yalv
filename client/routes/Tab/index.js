import { createBottomTabNavigator } from 'react-navigation';

import { HomeScreenNavigation, MusicScreenNavigation } from '../Stack';
import { BottomTabIcon } from '../../components/NavigationOptions/BottomTabIcon';

export const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenNavigation,
      navigationOptions: BottomTabIcon,
    },
    Music: {
      screen: MusicScreenNavigation,
      navigationOptions: BottomTabIcon,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
    },
  },
);
