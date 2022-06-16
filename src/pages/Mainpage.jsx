import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchUrl } from '../atom/apiUrl';

function Mainpage() {
  const [requestSearchUrl, setRequestSearchUrl] = useRecoilState(searchUrl);
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    function fetchData() {
      requestSearchUrl
        ? fetch(requestSearchUrl)
            .then((res) => res.json())
            .then((res) => {
              console.log('Search Results');
              console.log(res);
            })
        : fetch(
            process.env.REACT_APP_BASE_URL +
              'videos?part=snippet&chart=mostPopular&maxResults=25' +
              '&key=' +
              process.env.REACT_APP_AUTH_KEY
          )
            .then((res) => res.json())
            .then((res) => {
              console.log('Default most popular');
              console.log(res);
            });
    }

    fetchData();

    if (requestSearchUrl) {
      setRequestSearchUrl('');
    }

    return;
  }, [requestSearchUrl]);

  return (
    <h1 className='title'>
      color: blue;
      <div className='sub'>color: red</div>
    </h1>
  );
}

export default Mainpage;
