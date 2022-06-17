import React from 'react';
import styled from 'styled-components';
import VideosList from '../components/videosList/VideosList';
import { searchResults } from '../atom/videos';
import { useRecoilState } from 'recoil';

export default function SearchResult() {
  const [videos] = useRecoilState(searchResults);

  return (
    <OuterContainer>
      <VideosList videos={videos} />
    </OuterContainer>
  );
}

const OuterContainer = styled.div``;
