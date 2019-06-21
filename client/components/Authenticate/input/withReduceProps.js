// @flow
import React from 'react';

type Props = {
  t: Function,
  animatedInputValue: Array,
  values: Object,
  handleBlur: Function,
  handleChange: Function,
  touched: Object,
  errors: Object,
}

export const withReduceProps = (Component) => (props: Props) => {
  const {
    t,
    animatedInputValue,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
  } = props;

  const commonProps = {
    t,
    animatedInputValue,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
  };

  return (
    <>
      <Component {...{ ...props, commonProps }} />
    </>
  );
};
