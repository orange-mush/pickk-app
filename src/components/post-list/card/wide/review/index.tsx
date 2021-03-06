import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import PostCardWideHeader, {PostCardWideHeaderProps} from './header';
import PostCardWideThumbnail, {PostCardWideThumbnailProps} from './thumbnail';
import PostCardWideItemRow, {PostCardWideItemRowProps} from './item-row';
import {Touchable} from '@src/modules/atoms';
import {colors, rem} from '@src/constants';

import {IReview} from '@src/interfaces';

export type PostCardWideReviewProps = IReview;

function PostCardWideReview(props: PostCardWideReviewProps) {
  const navigation = useNavigation();

  return (
    <Touchable
      onPress={() =>
        navigation.navigate('PostView', {
          id: props.id,
        })
      }>
      <Wrapper>
        <PostCardWideThumbnail {...(props as PostCardWideThumbnailProps)} />
        <PostCardWideHeader {...(props as PostCardWideHeaderProps)} />
        <PostCardWideItemRow {...(props as PostCardWideItemRowProps)} />
      </Wrapper>
    </Touchable>
  );
}

export default React.memo(
  PostCardWideReview,
  (prev, next) => prev.id === next.id,
);

const Wrapper = styled.View({
  width: '100%',
  backgroundColor: 'white',
  borderBottomWidth: rem(4),
  borderBottomColor: colors.lightGrey,
});
