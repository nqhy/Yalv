// @flow
import React from 'react';

import { AunthenticateInput } from './AuthenticateInput';
import { withReduceProps } from './withReduceProps';

type Props = {
  commonProps: Object,
}

export const SignInInput = withReduceProps((props: Props) => {
  const {
    commonProps,
  } = props;

  return (
    <>
      <AunthenticateInput
        {...commonProps}
        isFirst={true}
        type="email"
        keyboardType="email-address"
      />
      <AunthenticateInput
        {...commonProps}
        type="password"
        secureTextEntry={true}
      />
    </>
  );
});
