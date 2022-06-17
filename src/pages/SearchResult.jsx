import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchResults } from '../atom/videos';
import VideosList from '../components/videosList/VideosList';

export default function SearchResult() {
  const [videos] = useRecoilState(searchResults);

  return (
    <OuterContainer>
      <VideosList />
    </OuterContainer>
  );
}

const OuterContainer = styled.div``;
