import { atom } from 'recoil';

export const searchUrl = atom({
  key: 'searchUrl',
  default: '',
});

export const commentApi = atom({
  key: 'commentApi',
  default: '',
});
