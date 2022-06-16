import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../styles/Mixin';
import SearchInput from './SearchArea';

export default function Navbar() {
  return (
    <OuterContainer>
      <Logo>
        <YoutubeLogo />
      </Logo>
      <SearchInput />
      <div></div>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #202020;

  width: 100vw;
  height: 70px;
  border-bottom: 2px solid #373737;
`;
const Logo = styled.div`
  ${flexCenter}
  height: ${(props) => props.theme.navHeight};
  padding-left: 20px;
  line-height: ${(props) => props.theme.navHeight};
`;

const YoutubeLogo = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/logo.png',
})`
  display: inline-block;
`;
