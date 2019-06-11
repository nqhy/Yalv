import { createStackNavigator } from 'react-navigation';

import AuthenticateScreen from '../containers/Authenticate';
import { MainScreen } from './Drawer/Main';

export const RootRouter = createStackNavigator(
  {
    Authenticate: { screen: AuthenticateScreen, navigationOptions: { header: null } },
    Main: { screen: MainScreen },
  },
  {
    initialRouteName: 'Authenticate',
    defaultNavigationOptions: {
      header: null,
    },
  },
);
