import { atom } from 'jotai'

export const themeAtom = atom<'light' | 'dark'>('light')
export const sidebarAtom = atom(false)
