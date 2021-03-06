import React from 'react';
import styled from 'styled-components/native';

import {TouchableCmp, Image, Text, Space} from '@src/modules/atoms';
import {WHITE, BLACK} from '@src/constants/colors';

import {rem} from '@src/constants';
import {ItemInfo} from '@src/modules/types/ItemInfo';
import {ImageSize} from '@src/lib/utils/image-size-parser';
import {getDiscountRate} from '@src/lib/utils';

export type ItemNavButtonProps = Pick<
  ItemInfo,
  'brandKor' | 'imageUrl' | 'originalPrice' | 'salePrice'
> & {
  selected: boolean;
  onClick: () => void;
};

function ItemNavButton({
  brandKor,
  imageUrl,
  originalPrice,
  salePrice,
  selected,
  onClick,
}: ItemNavButtonProps) {
  return (
    <Touchable selected={selected} onPress={onClick}>
      <ImageWrapper selected={selected}>
        <Image
          src={imageUrl}
          size={ImageSize.Small}
          style={{
            width: rem(56),
            height: rem(56),
          }}
          circle
          border
          resizeMode='stretch'
        />
      </ImageWrapper>
      <Text level={1} fontWeight='medium'>
        {brandKor}
      </Text>
      <Text fontWeight='bold' style={{alignItems: 'flex-end'}}>
        {getDiscountRate(originalPrice, salePrice) && (
          <Text level={-1} color={'#d95050'}>
            {getDiscountRate(originalPrice, salePrice)}%
          </Text>
        )}
        <Space direction='ROW' size={2} />
        {originalPrice}
      </Text>
    </Touchable>
  );
}

export default React.memo(
  ItemNavButton,
  (prev, next) => prev.selected === next.selected,
);

const Touchable = styled(TouchableCmp)<{selected: boolean}>((props) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: rem(16),
    paddingBottom: rem(4),
    borderBottomWidth: rem(2),
    borderBottomColor: props.selected ? BLACK : WHITE,
  };
});

const ImageWrapper = styled.View<{selected: boolean}>((props) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: rem(4),
    borderColor: props.selected ? BLACK : WHITE,
    borderWidth: rem(2),
    borderRadius: 9999,
    marginBottom: rem(3),
  };
});
