// @flow
import React from 'react';

import { AunthenticateInput } from './AuthenticateInput';
import { withReduceProps } from './withReduceProps';

type Props = {
  commonProps: Object,
}

export const SignUpInput = withReduceProps((props: Props) => {
  const {
    commonProps,
  } = props;

  return (
    <>
      <AunthenticateInput
        {...commonProps}
        isFirst={true}
        type="username"
      />
      <AunthenticateInput
        {...commonProps}
        type="email"
        keyboardType="email-address"
      />
      <AunthenticateInput
        {...commonProps}
        type="password"
        secureTextEntry={true}
      />
      <AunthenticateInput
        {...commonProps}
        type="confirmation"
        secureTextEntry={true}
      />
    </>
  );
});
