// @flow
import React from 'react';

import { CommonInput } from '../common';
import { styleAuthenticate } from './styleAuthenticate';
import { withRenderInput } from '../../containers/authenticate/withRenderInput';

type Props = {
  data: Array,
  animatedInputValue: Array,
  t: Function,
}

const InputsComponent = (props: Props) => {
  const { data, animatedInputValue, t } = props;

  const renderInput = () => data.map((value, index) => {
    let isLast = false;
    let isFirst = false;
    let additonalStyle = {};

    if (index === 0) isFirst = true;
    if (index === data.length) isLast = true;
    if (isFirst) additonalStyle = styleAuthenticate.firstInput;
    if (isLast) additonalStyle = styleAuthenticate.lastInput;

    return (
      <CommonInput
        key={index}
        style={{
          styleInput: {
            ...styleAuthenticate.input,
            ...additonalStyle,
          },
        }}
        selectionColor={styleAuthenticate.selectionColor}
        placeholderTextColor={styleAuthenticate.placeholderTextColor}
        placeholder={t(value.namePlaceholder)}
        animation={{
          type: 'opacity',
          value: animatedInputValue[value.namePlaceholder],
        }}
      />
    );
  });

  return (
    <>
      {renderInput()}
    </>
  );
};

export const Inputs = withRenderInput(InputsComponent);
