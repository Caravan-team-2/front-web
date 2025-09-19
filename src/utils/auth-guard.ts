import { redirect } from '@tanstack/react-router'
import { getDefaultStore } from 'jotai'
import { authAtom } from '../atoms/auth'

const store = getDefaultStore()

export function requireAuth() {
  const auth = store.get(authAtom)
  if (!auth.user) {
    throw redirect({ to: '/auth/login' })
  }
  return auth.user
}

export function requireRole(role: string) {
  const user = requireAuth()
  if (user.role !== role) {
    throw redirect({ to: '/auth/login' })
  }
  return user
}
