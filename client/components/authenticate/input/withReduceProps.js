// @flow
import React, { useState } from 'react';

type Props = {
  t: Function,
  animatedInputValue: Array,
  values: Object,
  handleBlur: Function,
  handleChange: Function,
  isSubmitting: Boolean,
  touched: Object,
  errors: Object,
}

export const withReduceProps = (Component) => (props: Props) => {
  const {
    t,
    animatedInputValue,
    values,
    isSubmitting,
    touched,
    errors,
    handleBlur,
    handleChange,
  } = props;
  const [focusInput, setFocusInput] = useState(null);
  const editable = !isSubmitting;
  const commonProps = {
    t,
    animatedInputValue,
    values,
    editable,
    touched,
    errors,
    focusInput,
    setFocusInput,
    handleBlur,
    handleChange,
  };


  return (
    <>
      <Component {...{ ...props, commonProps, setFocusInput }} />
    </>
  );
};
