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
  navigation: Object,
}

export const PostList = (props: Props) => {
  const { postsData, navigation, loadingPost = true } = props;

  const displayPost = () => {
    if (loadingPost) {
      return (
        <Body style={loadingSpineStyle.body}>
          <LoadingSpine sourceImg={LoadingSpineCategory} />
        </Body>
      );
    }
    return postsData.map((value, index) => {
      const { title, content } = value;
      return (
        <Post key={index} background={value.images[0]} {...{ index, navigation, title, content }} />
      );
    });
  };

  return (
    <>
      <ScrollView style={PostListStyle.scroll} showsHorizontalScrollIndicator={false} horizontal={true}>
        <Body style={PostListStyle.body}>
          {displayPost()}
        </Body>
      </ScrollView>
    </>
  );
};
