import { createBottomTabNavigator } from 'react-navigation';

import { HomeScreenNavigation } from './Home';

export const TabNavigation = createBottomTabNavigator(
  {
    Home: { screen: HomeScreenNavigation },
  },
  {
    initialRouteName: 'Home',
  },
);
