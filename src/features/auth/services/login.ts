import { getDefaultStore } from 'jotai'
import { authAtom } from '@/atoms/auth'

export type LoginRequest = {
  email: string
  password: string
  remember?: boolean
}

export async function loginUser(request: LoginRequest): Promise<{ id: string; role: string }> {
  const store = getDefaultStore()
  // TODO: integrate with API using axios/apollo
  const user = { id: '1', role: 'user' }
  store.set(authAtom, { user })
  return user
}
