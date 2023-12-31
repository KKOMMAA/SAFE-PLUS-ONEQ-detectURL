import React from 'react';
import styled from 'styled-components';

import CancelIcon from '../../assets/icon/Ic_menu_cancel.svg';

export default function HomeMenu({ src, desc, isSetting, handleClick }) {
  return (
    <MenuContainer onClick={() => handleClick()}>
      <MenuWrapper>
        <img src={src} alt="메뉴" />
        {isSetting && <img src={CancelIcon} alt="메뉴 취소" />}
      </MenuWrapper>

      <MenuDesc>{desc}</MenuDesc>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 5.3rem;
  height: 5.1rem;

  border-radius: 1.4rem;
  background: #f9f9fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.13);

  >img: nth-of-type(2) {
    position: absolute;
    top: -0.5rem;
    right: -0.2rem;
  }
`;

const MenuDesc = styled.p`
  margin-top: 0.6rem;

  color: #393939;

  font-size: 1.15rem;
  font-weight: 600;
`;
