import { createAppContainer, createStackNavigator } from 'react-navigation';

import { LoginScreen } from '../components/authenticate';
import { withProvider } from '../utils/providerHoc';


const MainNavigator = createStackNavigator({
  Login: { screen: withProvider(LoginScreen) },
},
{
  initialRouteName: 'Login',
}
);

const YalvApp = createAppContainer(MainNavigator);

export default YalvApp;
