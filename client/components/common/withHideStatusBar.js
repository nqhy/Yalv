// @flow
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

export const withHideStatusBar = (Component: Node) => (props) => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <Component {...props} />
  );
};
