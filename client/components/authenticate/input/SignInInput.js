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
  isSubmitting: Boolean,
  commonProps: Object,
}

export const SignInInput = withReduceProps((props: Props) => {
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
    </>
  );
});
