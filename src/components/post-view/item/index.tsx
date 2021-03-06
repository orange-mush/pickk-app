import React, {useState} from 'react';

import ItemNav from './nav';
import ReviewPreview, {ReviewPreviewProps} from './review/preview';
import ItemInfo, {ItemInfoProps} from './info';
import Review, {PostViewReviewProps} from './review';
import {Space} from '@src/modules/atoms';

import {RecommendPost} from '@src/modules/types/RecommendPost';

export type PostViewItemProps = Pick<RecommendPost, 'reviews'>;

export default function PostViewItem({reviews}: PostViewItemProps) {
  const [current, setCurrent] = useState(0);

  const items = reviews.map((review) => {
    const {brandKor, imageUrl, originalPrice, salePrice} = review.itemInfo;
    return {brandKor, imageUrl, originalPrice, salePrice};
  });

  const currentReview = reviews[current];

  return (
    <>
      <ItemNav {...{items, current, setCurrent}} />
      <ReviewPreview {...(currentReview as ReviewPreviewProps)} />
      <ItemInfo {...(currentReview.itemInfo as ItemInfoProps)} />
      <Space level={1} />
      <Review {...(currentReview as PostViewReviewProps)} />
    </>
  );
}
