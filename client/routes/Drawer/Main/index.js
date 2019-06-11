import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import { HomeScreenNavigation } from '../../Home';
import { MainNavigationOptions } from '../../../components/NavigationOptions/Main';
import { customDrawerComponent } from '../../../components/Drawer/customDrawer';
import { color } from '../../../styles/theme';

const ScreenWidth = Dimensions.get('screen').width;

export const MainScreen = createDrawerNavigator(
  {
    Home: { screen: HomeScreenNavigation, navigationOptions: MainNavigationOptions },
  },
  {
    drawerWidth: ScreenWidth * 0.6,
    drawerBackgroundColor: color.black,
    drawerPosition: 'right',
    initialRouteName: 'Home',
    contentComponent: customDrawerComponent,
  }
);
