import { createAppContainer, createStackNavigator } from 'react-navigation';
import { KeepAwake, registerRootComponent } from 'expo';

import { LoginScreen } from '../components/authenticate';
import { withProvider } from '../utils/providerHoc';


const MainNavigator = createStackNavigator({
  Login: { screen: withProvider(LoginScreen) },
},
{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0,
    },
  },
}
);

const YalvApp = createAppContainer(MainNavigator);

// eslint-disable-next-line no-undef
if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(YalvApp);
