import { atom } from 'jotai'

export const authAtom = atom<{ user: null | { id: string; role: string } }>({
  user: null,
})
