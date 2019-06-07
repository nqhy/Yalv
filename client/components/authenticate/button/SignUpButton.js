// @flow
import React from 'react';

import { CommonButton, BackButton } from '../../common';
import { styleButton } from '../styles';

type Props = {
  t: Function,
  setIsSignIn: Function,
}

export const SignUpButton = (props: Props) => {
  const {
    t,
    setIsSignIn,
  } = props;

  return (
    <>
      <CommonButton
        style={{
          styleButton: styleButton.buttonSubmit,
          styleText: styleButton.buttonText }
        }
      >
        {t('submit')}
      </CommonButton>
      <BackButton handlePress={() => setIsSignIn(true)} />
    </>
  );
};
