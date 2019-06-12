// @flow
import React, { useState, useEffect } from 'react';
import { Modal, Text } from 'react-native';
import { Container, Body, Content } from 'native-base';

type Props = {
  message: String,
  callbackFunc: Function,
}

export const ModalNotification = (props: Props) => {
  const { message, callbackFunc = () => null } = props;

  const [visibleValue, setVisibleValue] = useState(true);

  useEffect(() => {
    const visibleHandle = () => setTimeout(() => {
      setVisibleValue(false);
      callbackFunc();
    }, 2000);
    visibleHandle();
    return clearTimeout(visibleHandle);
  }, []);

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visibleValue}
      >
        <Body>
          <Content>
            <Text>{message}</Text>
          </Content>
        </Body>
      </Modal>
    </Container>
  );
};
