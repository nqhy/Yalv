// @flow
import React from 'react';

import { inputStyle } from './styles';
import { AnimatedTextInput } from '../Animated';
import { Message } from '../Authenticate/messages';

type Props = {
  style: Object,
  selectionColor: String,
  placeholderTextColor: String,
  placeholder: String,
  animation: Object,
  handleBlur: Function,
  handleChange: Function,
  secureTextEntry: Boolean,
  editable: Boolean,
  autoCapitalize: String,
  keyboardType: String,
  valueFormik: String,
  type: String,
  touched: Object,
  errors: Object,
  focus: Boolean,
  handleSubmitInput: Function,
  returnKeyType: String,
}

export const CommonInputFormik = (props: Props) => {
  const {
    style: {
      styleInput = {},
    } = {},
    selectionColor = 'pink',
    placeholderTextColor = 'pink',
    placeholder = 'Common Input ...',
    animation: {
      typeAnimation = 'opacity',
      valueAnimation = 1,
    },
    handleBlur = () => null,
    handleChange = () => null,
    secureTextEntry = false,
    editable = true,
    autoCapitalize = 'none',
    keyboardType = 'default',
    valueFormik = '',
    type = '',
    touched = {},
    errors = {},
    focus = false,
    handleSubmitInput = () => null,
    returnKeyType,
  } = props;

  return (
    <>
      <AnimatedTextInput
        style={[inputStyle.input, styleInput, { [typeAnimation]: valueAnimation }]}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={valueFormik}
        onSubmitEditing={() => handleSubmitInput()}
        autoFocus={focus}
        {...{ selectionColor,
          placeholderTextColor,
          placeholder,
          secureTextEntry,
          editable,
          autoCapitalize,
          keyboardType,
          focus,
          returnKeyType,
        }}
      />
      {touched[type] && errors[type] ? (
        <Message>{errors[type]}</Message>
      ) : <Message />
      }
    </>
  );
};
