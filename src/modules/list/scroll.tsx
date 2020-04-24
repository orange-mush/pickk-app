import React from 'react';
import {
  Animated,
  SafeAreaView,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import {BLACK} from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '../atoms/text';

export type ScrollListProps = {
  style?: StyleProp<ViewStyle>;
  category: string;
  // tslint:disable-next-line: no-any
  filter?: any;
  // tslint:disable-next-line: no-any
  query: any;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  // tslint:disable-next-line: no-any
  ListItem: React.FunctionComponent<any>;
  Skeleton?: React.FunctionComponent;
  numColumns?: number;
  headerMaxHeight?: number;
  // tslint:disable-next-line: no-any
  ListHeader?: React.ComponentType<any> | React.ReactElement | null;
  NoResult?: React.FunctionComponent;
};

const ITEMS_PER_PAGE = 10;

function ScrollList({
  style,
  category,
  filter,
  query,
  ListItem,
  Skeleton,
  onScroll,
  numColumns = 1,
  headerMaxHeight = 0,
  ListHeader,
  NoResult,
}: ScrollListProps) {
  const propName = category;

  const {networkStatus, loading, error, data, refetch, fetchMore} = useQuery(
    query,
    {
      variables: {
        start: 0,
        first: ITEMS_PER_PAGE,
        ...filter,
      },
      notifyOnNetworkStatusChange: true,
    },
  );

  if (networkStatus === 1 || !data || !data[propName]) {
    return Skeleton ? (
      <Skeleton />
    ) : (
      <ActivityIndicator size={35} color={BLACK} />
    );
  }
  console.log(data[propName]);

  if (error) {
    return <Text>Error:{error.message}</Text>;
  }

  if (data && data[propName].length === 0) {
    return NoResult ? <NoResult /> : <Text>결과가 없습니다.</Text>;
  }

  return (
    <>
      <Animated.FlatList
        ListHeaderComponent={ListHeader}
        scrollEventThrottle={16}
        onScroll={onScroll}
        data={data[propName]}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => <ListItem {...item}></ListItem>}
        numColumns={numColumns}
        columnWrapperStyle={
          numColumns > 1 && {
            paddingHorizontal: rem(6),
          }
        }
        progressViewOffset={headerMaxHeight}
        refreshing={data.networkStatus === 4}
        onRefresh={() => refetch()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          fetchMore({
            variables: {
              start: data[propName].length,
              first: ITEMS_PER_PAGE,
              ...filter,
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
              if (!fetchMoreResult || fetchMoreResult[propName].length === 0) {
                return previousResult;
              }

              return {
                [propName]: previousResult[propName].concat(
                  fetchMoreResult[propName],
                ),
              };
            },
          });
        }}
      />
      {loading && <ActivityIndicator size={35} color={BLACK} />}
    </>
  );
}
export default React.memo(ScrollList);
