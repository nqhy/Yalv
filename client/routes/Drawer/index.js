import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import { DrawerNavigationOptions } from '../../components/NavigationOptions/Drawer';
import { customDrawerComponent } from '../../components/Drawer/customDrawer';
import { color } from '../../styles/theme';
import { TabNavigation } from '../Tab';
import { HomeIcon } from '../../styles/img';

const ScreenWidth = Dimensions.get('screen').width;

export const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigation,
      navigationOptions: DrawerNavigationOptions('main', HomeIcon),
    },
  },
  {
    drawerWidth: ScreenWidth * 0.6,
    drawerBackgroundColor: color.black,
    drawerPosition: 'right',
    initialRouteName: 'Home',
    contentComponent: customDrawerComponent,
    drawerLockMode: 'locked-closed',
  }
);
