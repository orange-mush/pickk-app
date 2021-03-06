import React, {useState, useEffect} from 'react';
import {Animated, BackHandler} from 'react-native';

import Item from './item/index';
import ItemFilter from './filter';
import RankingListScreenProps from './props';
import Search from '@src/assets/icons/search';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {
  ItemFilterContext,
  PriceFilterContext,
  SortContext,
  InitailizeCommonStatesContext,
} from '@src/context/filter';
import ScrollList from '@src/modules/list/scroll';
import Header from '@src/modules/header';
import {
  MIN_PRICE,
  SIZE,
  DIM,
  MAX_PRICE,
} from '@src/modules/molecules/filter/price-selector';

export const DEFAULT_SORT_OPTION = {
  sort: 'DESC',
  sortBy: 'rankScore',
};

const HEADER_MAX_HEIGHT = rem(126);
const HEADER_MIN_HEIGHT = rem(108);

export default function RankingListScreen(props: RankingListScreenProps) {
  const [scrollY] = useState(new Animated.Value(0));
  const [major, setMajor] = useState('ALL');
  const [minor, setMinor] = useState('ALL');
  const [final, setFinal] = useState('ALL');
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);
  const [priceOption, setPriceOption] = useState(false);
  const [minimumPrice] = useState(new Animated.Value(MIN_PRICE));
  const [maximumPrice] = useState(new Animated.Value(MAX_PRICE));
  const [minState, setMinState] = useState(0);
  const [maxState, setMaxState] = useState(SIZE - DIM);
  const [option, setOption] = useState(false);

  const selectedMinimumPrice =
    priceOption && option ? (minimumPrice as any)._value : MIN_PRICE;
  const selectedMaximumPrice =
    priceOption && option ? (maximumPrice as any)._value : MAX_PRICE;

  const sortStore = {
    state: {
      sortOption,
    },
    action: {
      setSortOption,
    },
  };

  const itemFilterStore = {
    state: {
      itemMajorType: major,
      itemMinorType: minor,
      itemFinalType: final,
    },
    action: {
      setItemMajorType: setMajor,
      setItemMinorType: setMinor,
      setItemFinalType: setFinal,
    },
  };

  const priceFilterStore = {
    state: {
      minimumPrice,
      maximumPrice,
      minState,
      maxState,
      priceOption,
      option,
    },
    action: {
      setMinState,
      setMaxState,
      setPriceOption,
      setOption,
    },
  };

  const initializeCommonStatesStore = {
    initailizeCommonStates: () => {
      setSortOption(DEFAULT_SORT_OPTION);
      minimumPrice.setValue(MIN_PRICE);
      maximumPrice.setValue(MAX_PRICE);
      setOption(false);
      setPriceOption(false);
      setMinState(0);
      setMaxState(SIZE - DIM);
    },
  };

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const titleSize = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [rem(24), rem(16)],
    extrapolate: 'clamp',
  });

  const titlePadding = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [rem(20), rem(8)],
    extrapolate: 'clamp',
  });

  const handleBackPress = () => {
    if (major === 'ALL') {
      return false;
    } else {
      setMajor('ALL');
      setMinor('ALL');
      setFinal('ALL');
      initializeCommonStatesStore.initailizeCommonStates();
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return function cleanup() {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [major]);

  const icons = [
    {
      Icon: Search,
      fill: colors.primary,
      onPress: () => {
        props.navigation.navigate('Search');
      },
    },
  ];

  return (
    <ItemFilterContext.Provider value={itemFilterStore}>
      <PriceFilterContext.Provider value={priceFilterStore}>
        <SortContext.Provider value={sortStore}>
          <InitailizeCommonStatesContext.Provider
            value={initializeCommonStatesStore}>
            <Header
              {...{
                icons,
                titlePadding,
                titleSize,
                height: headerHeight,
                title: '랭킹',
              }}>
              <ItemFilter />
            </Header>
            <ScrollList
              category='getItemRanking'
              query={null}
              ListItem={Item}
              onScroll={Animated.event([
                {nativeEvent: {contentOffset: {y: scrollY}}},
              ])}
              filter={{
                ...itemFilterStore.state,
                sortBy: sortOption.sortBy,
                sort: sortOption.sort,
                minimumPrice: selectedMinimumPrice,
                maximumPrice: selectedMaximumPrice,
              }}
            />
          </InitailizeCommonStatesContext.Provider>
        </SortContext.Provider>
      </PriceFilterContext.Provider>
    </ItemFilterContext.Provider>
  );
}
