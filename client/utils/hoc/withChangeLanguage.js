// @flow
import React from 'react';

type Props = {
  i18n: Object,
}

export const withChangeLanguage = (Component: Node) => (props: Props) => {
  const { i18n } = props;

  const onChangeLanguage =  (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Component {...props} onChangeLanguage={(value) => onChangeLanguage(value)} />
  );
};
