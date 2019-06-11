// @flow
import React from 'react';
import { Container, Header, Right, Icon } from 'native-base';

import { headerComponentStyle } from './styles';

type Props = {
  navigation: Object,
}

export const withHeaderComponenent = (Component) => (props: Props) => {
  const { navigation: { openDrawer = () => null } = {} } = props;

  return (
    <Container>
      <Header style={headerComponentStyle.header}>
        <Right>
          <Icon name="ios-menu" onPress={() => openDrawer()} />
        </Right>
      </Header>
      <Component {...props} />
    </Container>
  );
};
