import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '@src/assets/icons/bottom-tab/home';
import PostIcon from '@src/assets/icons/bottom-tab/post';
import ItemIcon from '@src/assets/icons/bottom-tab/item';
import rem from '@src/constants/rem';
import colors, {WHITE} from '@src/constants/colors';
import TabBarButton from './button';

type ButtonProps = {
  title: string;
  route: string;
  Icon: React.ElementType;
};

const data: ButtonProps[] = [
  {
    title: '홈',
    route: 'Home',
    Icon: HomeIcon,
  },
  {title: '포스트', route: 'Post', Icon: PostIcon},
  {title: '랭킹', route: 'Rank', Icon: ItemIcon},
  {title: 'MY', route: 'My', Icon: ItemIcon},
];

// tslint:disable-next-line: no-any
export default function TabBar(props: any) {
  const curIndex = props.state.index;
  return (
    <Wrapper>
      {data.map((v, i) => (
        <TabBarButton
          key={i}
          {...v}
          navigation={props.navigation}
          currentRouteName={data[curIndex].route}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: rem(5),
  paddingBottom: rem(3),
  paddingHorizontal: rem(8),
  borderTopWidth: rem(1),
  borderTopColor: colors.lightGrey,
  backgroundColor: WHITE,
});
