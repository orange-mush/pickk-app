import React from 'react';
import styled from 'styled-components/native';

import PostCardWideThumnailProps from './props';
import rem from '@src/constants/rem';
import {imageUriHandler} from '@src/lib/utils/url-parser';
import {ImageSize} from '@src/lib/utils/image-size-parser';

export default function PostCardWideThumnail({
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
}: PostCardWideThumnailProps) {
  return (
    <Thumnail
      source={{
        uri: imageUriHandler(
          titleType,
          titleImageUrl,
          titleYoutubeUrl,
          ImageSize.Raw,
        ),
      }}
    />
  );
}

const Thumnail = styled.Image({
  width: '100%',
  height: rem(203),
});
