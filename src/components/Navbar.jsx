import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../styles/Mixin';

export default function Navbar() {
  return (
    <OuterContainer>
      <Logo>
        <YoutubeLogo />
        <form>
          <SearchArea />
        </form>
      </Logo>
      <SearchArea></SearchArea>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  position: relative;
  display: flex;

  width: 100vw;
  height: 70px;
  border: 1px solid pink;
`;
const Logo = styled.div`
  ${flexCenter}
  height: ${(props) => props.theme.navHeight};
  border: 1px solid red;
  line-height: ${(props) => props.theme.navHeight};
`;

const YoutubeLogo = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/logo.png',
})`
  display: inline-block;
`;

const SearchArea = styled.input.attrs({
  type: 'text',
})``;
