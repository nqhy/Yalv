import { createStackNavigator } from 'react-navigation';

import AuthenticateScreen from '../containers/Authenticate';
import { DrawerNavigation } from './drawerNavigation';

const routes = {
  Authenticate: { screen: AuthenticateScreen, navigationOptions: { header: null } },
  DrawerNavigation: { screen: DrawerNavigation },
};

const configs = {
  initialRouteName: 'Authenticate',
  defaultNavigationOptions: {
    header: null,
  },
};

export const MainNavigation = createStackNavigator(
  routes,
  configs,
);
