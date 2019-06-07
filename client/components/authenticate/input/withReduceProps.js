// @flow
import React from 'react';

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
  } = props;

  const editable = !isSubmitting;
  const commonProps = {
    t,
    animatedInputValue,
    values,
    editable,
    touched,
    errors,
  };
  return (
    <>
      <Component {...{ commonProps }} {...props} />
    </>
  );
};
