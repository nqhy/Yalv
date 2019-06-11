import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import { MainScreen } from '../components/Main';
import { customDrawerComponent } from '../components/Drawer/customDrawer';
import { color } from '../styles/theme';
import { homeNavigationOptions } from '../components/Navigation';

const ScreenWidth = Dimensions.get('screen').width;
export const DrawerNavigation = createDrawerNavigator(
  { Main: { screen: MainScreen, navigationOptions: homeNavigationOptions } },
  {
    drawerWidth: ScreenWidth * 0.6,
    drawerBackgroundColor: color.black,
    drawerPosition: 'right',
    initialRouteName: 'Main',
    contentComponent: customDrawerComponent,
  }
);
