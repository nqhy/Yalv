import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../../containers/Home';
import TravelScreen from '../../../containers/Travel';
import { defaultNavigationOptions } from '../commonOptions';

export const HomeScreenNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Travel: {
      screen: TravelScreen,
      navigationOptions: { header: null, tabBarVisible: false },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions,
  },
);
