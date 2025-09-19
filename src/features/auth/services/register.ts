import { getDefaultStore } from 'jotai'
import { authAtom } from '@/atoms/auth'

export type RegisterRequest = {
  name: string
  email: string
  password: string
}

export async function registerUser(request: RegisterRequest): Promise<{ id: string; role: string }> {
  const store = getDefaultStore()
  // TODO: integrate with API using axios/apollo
  const user = { id: '1', role: 'user' }
  store.set(authAtom, { user })
  return user
}
