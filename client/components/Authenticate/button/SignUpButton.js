// @flow
import React from 'react';

import { CommonButton } from '../../common';
import { styleButton } from '../styles';

type Props = {
  t: Function,
  handleSubmit: Function,
}

export const SignUpButton = (props: Props) => {
  const {
    t,
    handleSubmit,
  } = props;

  return (
    <>
      <CommonButton
        style={{
          styleButton: styleButton.buttonSubmit,
          styleText: styleButton.buttonText }
        }
        handlePress={handleSubmit}
      >
        {t('submit')}
      </CommonButton>
    </>
  );
};
