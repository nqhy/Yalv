import { createBottomTabNavigator } from 'react-navigation';

import { HomeScreenNavigation, MusicScreenNavigation } from '../Stack';
import { BottomTabIcon } from '../../components/NavigationOptions/BottomTabIcon';
import { ScreenHeight } from '../../constants/Dimensions';

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
      style: {
        height: ScreenHeight * 0.07,
        shadowColor: '#0000ff',
        shadowOffset: { height: 5 },
        shadowOpacity: 0.75,
        shadowRadius: 5,
      },
    },
    defaultNavigationOptions: BottomTabIcon,
  },
);
