import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideosList from '../components/videosList/VideosList';

export default function Mainpage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const mostPopUrl =
      process.env.REACT_APP_BASE_URL +
      process.env.REACT_APP_MOST_POPULAR +
      '&key=' +
      process.env.REACT_APP_AUTH_KEY;

    fetch(mostPopUrl)
      .then((res) => res.json())
      .then((res) => {
        setVideos([...res.items]);
      });
  }, []);

  return (
    <OuterContainer>
      <VideosList videos={videos} />
    </OuterContainer>
  );
}

const OuterContainer = styled.div``;
