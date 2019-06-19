import { createAppContainer } from 'react-navigation';
import { KeepAwake, registerRootComponent } from 'expo';
import { compose } from 'react-apollo';

import '../locales/i18n';
import { withApolloProvider, withProviderRedux } from '../utils/hoc';
import { RootRouter } from '../routes';

const YalvApp = compose(
  withApolloProvider,
  withProviderRedux,
  createAppContainer,
)(RootRouter);

// eslint-disable-next-line no-undef
if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(YalvApp);
