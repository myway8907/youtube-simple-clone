import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchUrl } from '../atom/apiUrl';
import VideosList from '../components/videosList/VideosList';

export default function Mainpage() {
  const [requestSearchUrl, setRequestSearchUrl] = useRecoilState(searchUrl);
  const [mostPopular, setMostPopular] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const mostPopUrl =
      process.env.REACT_APP_BASE_URL +
      process.env.REACT_APP_MOST_POPULAR +
      '&key=' +
      process.env.REACT_APP_AUTH_KEY;

    fetch(mostPopUrl)
      .then((res) => res.json())
      .then((res) => {
        setMostPopular([...res.items]);
      });
  }, []);

  console.log(mostPopular);

  // useEffect(() => {
  //   requestSearchUrl &&
  //     fetch(requestSearchUrl)
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));
  // }, [requestSearchUrl]);

  return (
    <OuterContainer>
      <VideosList mostPopular={mostPopular} />
    </OuterContainer>
  );
}

const OuterContainer = styled.div``;
