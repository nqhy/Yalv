// @flow
import React from 'react';

import { AunthenticateInput } from './AuthenticateInput';
import { withReduceProps } from './withReduceProps';

type Props = {
  commonProps: Object,
  setFocusInput: Function,
}

export const SignUpInput = withReduceProps((props: Props) => {
  const {
    commonProps,
    setFocusInput,
  } = props;

  return (
    <>
      <AunthenticateInput
        {...commonProps}
        isFirst={true}
        type="username"
        handleSubmitInput={() => setFocusInput('email')}
        returnKeyType="next"
      />
      <AunthenticateInput
        {...commonProps}
        type="email"
        keyboardType="email-address"
        handleSubmitInput={() => setFocusInput('password')}
        returnKeyType="next"
      />
      <AunthenticateInput
        {...commonProps}
        type="password"
        handleSubmitInput={() => setFocusInput('confirmation')}
        secureTextEntry={true}
        returnKeyType="next"
      />
      <AunthenticateInput
        {...commonProps}
        type="confirmation"
        secureTextEntry={true}
        returnKeyType="default"
      />
    </>
  );
});
