// @flow
import React from 'react';

import { AunthenticateInput } from './AuthenticateInput';
import { withReduceProps } from './withReduceProps';

type Props = {
  t: Function,
  animatedInputValue: Array,
  values: Object,
  handleBlur: Function,
  handleChange: Function,
  commonProps: Object,
}

export const SignUpInput = withReduceProps((props: Props) => {
  const {
    commonProps,
    handleBlur,
    handleChange,
  } = props;

  return (
    <>
      <AunthenticateInput
        {...commonProps}
        isFirst={true}
        type="username"
        handleBlur={handleBlur('username')}
        handleChange={handleChange('username')}
      />
      <AunthenticateInput
        {...commonProps}
        type="email"
        handleBlur={handleBlur('email')}
        handleChange={handleChange('email')}
        keyboardType="email-address"
      />
      <AunthenticateInput
        {...commonProps}
        type="password"
        handleBlur={handleBlur('password')}
        handleChange={handleChange('password')}
        secureTextEntry={true}
      />
      <AunthenticateInput
        {...commonProps}
        type="confirmation"
        handleBlur={handleBlur('confirmation')}
        handleChange={handleChange('confirmation')}
        secureTextEntry={true}
      />
    </>
  );
});
