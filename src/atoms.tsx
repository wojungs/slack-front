import { atom } from 'recoil';

export const messagesState = atom<string[]>({
  key: 'messagesState',
  default: [],
});
