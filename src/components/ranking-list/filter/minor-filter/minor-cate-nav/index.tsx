import React from 'react';
import styled from 'styled-components/native';

import ChevronLeft from '@src/assets/icons/chevron/left';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {
  useItemFilterContext,
  useInitailizeCommonStatesContext,
} from '@src/context/filter';
import {itemCateEnToKo, itemCate} from '@src/data/item';
import Text from '@src/modules/atoms/text';
import IconButton from '@src/modules/atoms/buttons/icons';

export default function MinorCateNav() {
  const itemFilterContext = useItemFilterContext();
  const {
    setItemMinorType,
    setItemMajorType,
    setItemFinalType,
  } = itemFilterContext.action;
  const {itemMinorType, itemMajorType} = itemFilterContext.state;
  const {initailizeCommonStates} = useInitailizeCommonStatesContext();

  const goBack = () => {
    setItemMajorType('ALL');
    setItemMinorType('ALL');
    setItemFinalType('ALL');
    initailizeCommonStates();
  };

  const handleChange = value => {
    setItemMinorType(value);
    setItemFinalType('ALL');
    initailizeCommonStates();
  };

  return (
    <Wrapper>
      <IconButton size={rem(18)} onPress={goBack} Icon={ChevronLeft} />
      <CateWrapper horizontal showsHorizontalScrollIndicator={false}>
        {getCateNames(itemMinorType, handleChange, itemCate[itemMajorType])}
      </CateWrapper>
    </Wrapper>
  );
}

const getCateNames = (minor, onChange, names: string[]) =>
  names.map((item, index) => (
    <Touchable key={index} onPress={() => onChange(item)}>
      <CateNameWrapper>
        <CateName
          level={1}
          color={item === minor ? '#333' : '#b9b9ba'}
          fontWeight={500}>
          {itemCateEnToKo[item]}
        </CateName>
      </CateNameWrapper>
    </Touchable>
  ));
const Touchable = styled.TouchableOpacity({});

const Wrapper = styled.View({
  width: '100%',
  height: rem(32),
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: rem(16),
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});

const CateWrapper = styled.ScrollView({});

const CateName = styled(Text)({});
const CateNameWrapper = styled.View({
  paddingHorizontal: rem(14),
  justifyContent: 'center',
  alignItems: 'center',
});
