// @flow
import React from 'react';

type Props = {
  t: Function,
  animatedInputValue: Array,
  values: Object,
  handleBlur: Function,
  handleChange: Function,
  isSubmitting: Boolean,
}

export const withReduceProps = (Component) => (props: Props) => {
  const {
    t,
    animatedInputValue,
    values,
    isSubmitting,
  } = props;
  const editable = !isSubmitting;
  const commonProps = {
    t,
    animatedInputValue,
    values,
    editable,
  };
  return (
    <>
      <Component {...{ commonProps }} {...props} />
    </>
  );
};
