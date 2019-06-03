import { createAppContainer, createStackNavigator } from 'react-navigation';
import { KeepAwake, registerRootComponent } from 'expo';

import { SignUpScreen } from '../components/authenticate';
import { withApolloProvider } from '../provider/withApolloProvider';


const MainNavigator = createStackNavigator({
  Login: { screen: SignUpScreen },
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

registerRootComponent(withApolloProvider(YalvApp));
