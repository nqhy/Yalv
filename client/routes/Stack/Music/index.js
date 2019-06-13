import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { HeaderComponenent } from '../../../components/NavigationOptions/HeaderTab';
import { MusicScreen } from '../../../components/Music';
import { ScreenHeight } from '../../../constants/Dimensions';

// Config Header Componenet with i18n namespace is the first paramater
const HeaderConfig = HeaderComponenent();

export const MusicScreenNavigation = createStackNavigator(
  {
    Music: {
      screen: MusicScreen,
      navigationOptions: (props) => ({
        headerTitle: <HeaderConfig {...props} />,
      }),
    },
  },
  {
    initialRouteName: 'Music',
    defaultNavigationOptions: {
      headerStyle: {
        height: ScreenHeight * 0.12,
      },
    },
  },
);
