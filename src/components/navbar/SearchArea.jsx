import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchResults } from '../../atom/videos';
import { useNavigate } from 'react-router-dom';

export default function SearchArea() {
  const [, setSearchVideos] = useRecoilState(searchResults);
  const inputRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const getSearchResult = useCallback((url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setSearchVideos(res.items);
      });
  }, []);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const dataUrl =
      process.env.REACT_APP_BASE_URL +
      'search?part=snippet&maxResults=25&q=' +
      inputRef.current.value +
      '&key=' +
      process.env.REACT_APP_AUTH_KEY;

    getSearchResult(dataUrl);

    formRef.current.reset();
    navigate('/search');
  }, []);

  return (
    <Form ref={formRef} onSubmit={onSubmit}>
      <SearchInput ref={inputRef}></SearchInput>
      <SearchBtn />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchInput = styled.input.attrs({
  type: 'search',
  name: 'searchText',
  placeholder: 'Search..',
})`
  height: 40px;
  width: 45vw;
  min-width: 250px;

  font-size: 20px;
  font-weight: 400;
  color: black;
  border: 1px solid #d3d3d3;
`;

const SearchBtn = styled.button.attrs({})``;
