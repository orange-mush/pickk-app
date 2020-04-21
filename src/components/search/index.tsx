import React, {useState, useEffect} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import SearchScreenProps from './props';
import Header from './header';
import SearchBar from './search-bar';
import Filter from './filter';
import NoResult from './no-result';
import PostCardReviewNarrow from '@src/components/post-list/card/narrow/review/index';
import PostCardLookNarrow from '@src/components/post-list/card/narrow/look/index';
import Item from '@src/components/channel/item/index';
import NavigationBar from '@src/modules/navigation/bar';
import {PostFilterContext, SortContext} from '@src/context/filter';
import ScrollList from '@src/modules/list/scroll';

const SCROLL_CATEGORY = {
  POST: 'allRecommendPosts',
  ITEM: 'allItemReviews',
  COMMUNITY: 'allCommunityPosts',
};

const Commuinty = styled.View({
  width: '100%',
  height: 20,
  borderBottomWidth: 1,
  borderBottomColor: 'grey',
});

const LIST_ITEM = {
  POST: {
    REVIEW: PostCardReviewNarrow,
    LOOK: PostCardLookNarrow,
  },
  ITEM: Item,
  COMMUNITY: Commuinty,
};

const items = ['포스트', '아이템', '커뮤니티'];
const CATEGORY = ['POST', 'ITEM', 'COMMUNITY'];
const DEFAULT_SORT_OPTION = {
  sort: 'DESC',
  sortBy: 'time',
};

export default function Search(props: SearchScreenProps) {
  const [text, setText] = useState('');
  const [navType, setNavType] = useState<'POST' | 'ITEM' | 'COMMUNITY'>('POST');
  const [postType, setPostType] = useState<'REVIEW' | 'LOOK'>('REVIEW');
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);

  useEffect(() => {
    setPostType('REVIEW');
    setSortOption(DEFAULT_SORT_OPTION);
  }, [navType]);

  const postFilterStore = {
    state: {postType},
    action: {setPostType},
  };

  const sortStore = {
    state: {
      sortOption,
    },
    action: {
      setSortOption,
    },
  };

  const listItemSelector = () =>
    navType === 'POST' ? LIST_ITEM.POST[postType] : LIST_ITEM[navType];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Wrapper>
        <Header navigation={props.navigation} />
        <SearchBar setText={setText} />
        <NavigationBar
          items={items}
          category={CATEGORY}
          navControl={{value: navType, setValue: setNavType}}
        />
        <PostFilterContext.Provider value={postFilterStore}>
          <SortContext.Provider value={sortStore}>
            <Filter navType={navType} />
          </SortContext.Provider>
        </PostFilterContext.Provider>
        <ScrollList
          category={SCROLL_CATEGORY[navType]}
          query={QUERY[navType]}
          filter={{
            ...{sortOption},
            searchText: text,
          }}
          ListItem={listItemSelector()}
          NoResult={NoResult}
          numColumns={postType === 'LOOK' ? 2 : 1}
        />
      </Wrapper>
    </TouchableWithoutFeedback>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
});

const GET_RECOMMEND_POST_LIST = gql`
  query allRecommendPosts(
    $start: Int!
    $first: Int!
    $searchText: String!
    $sort: SortDirection
    $sortBy: RecPostSortableField
  ) {
    allRecommendPosts(
      recommendPostOption: {
        filterGeneral: {
          start: $start
          first: $first
          sort: $sort
          sortBy: $sortBy
        }
        postFilter: {searchText: $searchText}
      }
    ) {
      id
      accountId
      name
      profileImageUrl
      title
      titleType
      titleImageUrl
      titleYoutubeUrl
      time
      pickCount
      viewCount
      commentCount
      simpleItemList {
        brandKor
        imageUrl
      }
    }
  }
`;

export const ALL_ITEM_REVIEWS = gql`
  query allItemReviews(
    $start: Int!
    $first: Int!
    $searchText: String!
    $sort: SortDirection
    $sortBy: ReviewSortableField
  ) {
    allItemReviews(
      reviewOption: {
        filterGeneral: {
          start: $start
          first: $first
          sort: $sort
          sortBy: $sortBy
        }
        reviewFilter: {searchText: $searchText}
      }
    ) {
      id
      recommendReason
      shortReview
      score
      itemInfo {
        id
        brandKor
        name
        originalPrice
        salePrice
        imageUrl
        averageScore
        pickCount
      }
      userInfo {
        name
        profileImageUrl
        id
      }
    }
  }
`;

export const GET_COMMUNITY_POST_LIST = gql`
  query allCommunityPosts(
    $start: Int!
    $first: Int!
    $searchText: String!
    $sort: SortDirection
    $sortBy: ComPostSortableField
  ) {
    allCommunityPosts(
      communityPostOption: {
        filterGeneral: {
          start: $start
          first: $first
          sort: $sort
          sortBy: $sortBy
        }
        postFilter: {searchText: $searchText}
      }
    ) {
      accountId
      name
      profileImgUrl
      commentCount
      id
      title
      contents {
        id
        text
        imageUrl
        contentType
      }
      time
      viewCount
      pickCount
      postType
    }
  }
`;

const QUERY = {
  POST: GET_RECOMMEND_POST_LIST,
  ITEM: ALL_ITEM_REVIEWS,
  COMMUNITY: GET_COMMUNITY_POST_LIST,
};
