import { createStackNavigator } from 'react-navigation';

import AuthenticateScreen from '../containers/Authenticate';
import RootBackgroundScreen from '../containers/RootBackground';
import { DrawerNavigation } from './Drawer';

export const RootRouter = createStackNavigator(
  {
    RootBackground: { screen: RootBackgroundScreen },
    Authenticate: { screen: AuthenticateScreen },
    DrawerNavigation: { screen: DrawerNavigation },
  },
  {
    initialRouteName: 'RootBackground',
    defaultNavigationOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
);
