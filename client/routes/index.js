import { createStackNavigator } from 'react-navigation';

import AuthenticateScreen from '../containers/Authenticate';
import { DrawerNavigation } from './Drawer';

export const RootRouter = createStackNavigator(
  {
    Authenticate: { screen: AuthenticateScreen, navigationOptions: { header: null } },
    DrawerNavigation: { screen: DrawerNavigation },
  },
  {
    initialRouteName: 'Authenticate',
    defaultNavigationOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
);
