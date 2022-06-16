import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchUrl } from '../../atom/apiUrl';

export default function SearchArea() {
  const [, setSearchUrl] = useRecoilState(searchUrl);
  const inputRef = useRef();
  const formRef = useRef();

  const makeSearchUrl = useCallback(() => {
    const dataUrl =
      process.env.REACT_APP_BASE_URL +
      'search?part=snippet&maxResults=25&q=' +
      inputRef.current.value +
      '&key=' +
      process.env.REACT_APP_AUTH_KEY;

    setSearchUrl(dataUrl);
  }, []);

  const onSubmit = useCallback((event) => {
    event.preventDefault();

    makeSearchUrl();

    formRef.current.reset();
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
