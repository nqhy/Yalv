import { createStackNavigator } from 'react-navigation';

import { HomeScreen } from '../../components/Home';

export const HomeScreenNavigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);
