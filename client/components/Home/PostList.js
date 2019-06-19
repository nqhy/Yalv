// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import { Body } from 'native-base';

import { loadingSpineStyle, PostListStyle } from './styles';
import { LoadingSpine } from '../common';
import { LoadingSpineCategory } from '../../styles/img';
import { Post } from './Post';

type Props = {
  postsData: Array,
  loadingPost: Boolean,
}

export const PostList = (props: Props) => {
  const { postsData, loadingPost = true } = props;

  const displayPost = () => {
    if (loadingPost) {
      return (
        <Body style={loadingSpineStyle.body}>
          <LoadingSpine sourceImg={LoadingSpineCategory} />
        </Body>
      );
    }
    return postsData.map((value, index) => (
      <Post key={index} title={value.title} background={value.images[0]} />
    ));
  };

  return (
    <>
      <ScrollView style={PostListStyle.scroll} showsVerticalScrollIndicator={false}>
        <Body style={PostListStyle.body}>
          {displayPost()}
        </Body>
      </ScrollView>
    </>
  );
};
