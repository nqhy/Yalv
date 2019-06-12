import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import { HomeScreen } from '../../../components/Home';
import { HeaderComponenent } from '../../../components/NavigationOptions/HeaderTab';

const ScreenHeight = Dimensions.get('screen').height;

// Config Header Componenet with i18n namespace is the first paramater
const HeaderConfig = HeaderComponenent();

export const HomeScreenNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: (props) => ({
        headerTitle: <HeaderConfig {...props} />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        height: ScreenHeight * 0.12,
      },
    },
  },
);
