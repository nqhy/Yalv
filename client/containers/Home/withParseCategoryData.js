// @flow
import React from 'react';

type Props = {
  getPostCategoryQuery: Object,
}

export const withParseCategoryData = (Component: Node) => (props: Props) => {
  const { getPostCategoryQuery: { loading: loadingCategory, postCategories: categoriesData = [] } } = props;

  return (
    <Component {...{ ...props, loadingCategory, categoriesData }} />
  );
};
