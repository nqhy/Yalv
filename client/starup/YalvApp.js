import { createAppContainer, createStackNavigator } from 'react-navigation';
import { KeepAwake, registerRootComponent } from 'expo';
import { compose } from 'react-apollo';

import '../locales/i18n';
import { withApolloProvider, withProviderRedux } from '../utils/hoc';
import { SignUpScreen } from '../containers/authenticate';

// Configure Stack Navigator and I18n for each screen
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

const YalvApp = compose(
  withApolloProvider,
  withProviderRedux,
  createAppContainer,
)(MainNavigator);

// eslint-disable-next-line no-undef
if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(YalvApp);
