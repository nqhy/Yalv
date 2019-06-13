// @flow
import React from 'react';
import { PostCategoryList } from './PostCategoryList';

type Props = {
  categoryData: Array,
  loading: Boolean,
}

export const HomeScreenComponent = (props: Props) => {
  const { categoryData, loading } = props;
  return (
    <PostCategoryList {...{ categoryData, loading }} />
  );
};
