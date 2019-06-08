// @flow
import React from 'react';

import { AunthenticateInput } from './AuthenticateInput';
import { withReduceProps } from './withReduceProps';

type Props = {
  commonProps: Object,
  setFocusInput: Function,
}

export const SignInInput = withReduceProps((props: Props) => {
  const {
    commonProps,
    setFocusInput,
  } = props;

  return (
    <>
      <AunthenticateInput
        {...commonProps}
        isFirst={true}
        type="email"
        keyboardType="email-address"
        handleSubmitInput={() => setFocusInput('password')}
        returnKeyType="next"
      />
      <AunthenticateInput
        {...commonProps}
        type="password"
        returnKeyType="default"
        secureTextEntry={true}
      />
    </>
  );
});
