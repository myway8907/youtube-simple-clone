import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchUrl } from '../atom/apiUrl';
import styled from 'styled-components';

function Mainpage() {
  const [requestSearchUrl] = useRecoilState(searchUrl);
  fetch();

  return (
    <h1 className='title'>
      color: blue;
      <div className='sub'>color: red</div>
    </h1>
  );
}

export default Mainpage;
