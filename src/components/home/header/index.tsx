import React from 'react';
import styled from 'styled-components/native';

import IconButton from '@src/modules/atoms/buttons/icons';
import HamburgetIcon from '@src/assets/icons/hamburger';
import SearchIcon from '@src/assets/icons/search';
import colors from '@src/constants/colors';

export type HomeHeaderProps = {
  toggleDrawer: () => void;
};

export default function HomeHeader({toggleDrawer}: HomeHeaderProps) {
  return (
    <Wrapper>
      <IconButton
        onPress={toggleDrawer}
        Icon={HamburgetIcon}
        size={24}
        fill={colors.white}
      />
      <IconButton
        onPress={toggleDrawer}
        Icon={SearchIcon}
        size={24}
        fill={colors.white}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,
  width: '100%',
  paddingVertical: 16,
  paddingHorizontal: 20,
});
