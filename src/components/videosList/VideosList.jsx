import React from 'react';
import styled from 'styled-components';
import VideoElement from './VideoElement';
import { nanoid } from 'nanoid';

export default function VideosList({ mostPopular }) {
  return (
    <OuterContainer>
      {mostPopular.map((item) => {
        return (
          <VideoElement
            key={nanoid(5)}
            id={item.id.videoId}
            thumbnail={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            publishDate={item.snippet.publishedAt}
            description={item.snippet.description}
          />
        );
      })}
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, auto));
  grid-auto-rows: auto;
  justify-items: center;
  gap: 20px;

  padding: 20px;
`;
