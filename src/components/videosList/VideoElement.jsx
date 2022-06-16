import React from 'react';
import styled from 'styled-components';

export default function VideoElement({
  id,
  thumbnail,
  title,
  publishDate,
  description,
}) {
  return (
    <OuterContainer>
      <VideoInf>
        <ThumnailContainer>
          <Thumnail image={thumbnail} />
        </ThumnailContainer>
        <VideoTitle>{title}</VideoTitle>
        <VideoDescrib>{publishDate}</VideoDescrib>
      </VideoInf>
    </OuterContainer>
  );
}
const OuterContainer = styled.div`
  overflow: hidden;
`;
const VideoInf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 350px;
`;

const VideoTitle = styled.span``;

const ThumnailContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const Thumnail = styled.img.attrs((props) => ({
  src: props.image,
}))`
  width: 100%;
  max-width: 350px;
`;

const VideoDescrib = styled.span`
  color: grey;
`;
