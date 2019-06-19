// @flow
import React from 'react';

type Props = {
  getPostQuery: Object,
}

export const withParsePostData = (Component: Node) => (props: Props) => {
  const { getPostQuery: { loading: loadingPost, posts: postsData = [] } } = props;

  return (
    <Component {...{ ...props, loadingPost, postsData }} />
  );
};
