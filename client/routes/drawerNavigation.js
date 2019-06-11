import { createDrawerNavigator } from 'react-navigation';

import { MainScreen } from '../components/Main';

const routes = {
  Main: { screen: MainScreen },
};

const configs = {
  drawerPosition: 'right',
  initialRouteName: 'Main',
};

export const DrawerNavigation = createDrawerNavigator(
  routes,
  configs,
);
