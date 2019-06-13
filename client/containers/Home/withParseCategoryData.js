// @flow
import React from 'react';

type Props = {
  data: Object,
}

export const withParseCategoryData = (Component: Node) => (props: Props) => {
  const { data: { loading, postCategories = [] } } = props;

  const categoryData = postCategories.map(element => {
    element.style = JSON.parse(element.style);
    return element;
  });

  return (
    <Component {...{ ...props, loading, categoryData }} />
  );
};
