import { Link, redirect } from '@tanstack/react-router'
import { getDefaultStore } from 'jotai'
import { authAtom } from '@/atoms/auth'
import type React from 'react'

export type LoginFormProps = {
  onSuccessRedirectTo?: string
}

export function LoginForm({ onSuccessRedirectTo = '/' }: LoginFormProps) {
  const store = getDefaultStore()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')

    if (!email || !password) return

    // TODO: call service layer
    store.set(authAtom, { user: { id: '1', role: 'user' } })
    throw redirect({ to: onSuccessRedirectTo })
  }

  return (
    <div className="w-full max-w-xl">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-primary">Bienvenue sur Assurini</h1>
          <p className="text-sm text-gray-500 mt-1">Entrez votre nom d'utilisateur et votre mot de passe pour continuer.</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[#1d2b4f]">Email</label>
            <input id="email" name="email" type="email" placeholder="Entrer votre email" autoComplete="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-[#1d2b4f]">Password</label>
              {/* @ts-expect-error - Route types will include /auth/forgot once created */}
              <Link to="/auth/forgot" className="text-sm text-gray-600 hover:underline">Mot de passe ?</Link>
            </div>
            <div className="relative">
              <input id="password" name="password" type="password" placeholder="Entrer votre mot de passe" autoComplete="current-password" required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="currentColor"/></svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-gray-600">
              <input type="checkbox" name="remember" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <span>Se souvenir de moi</span>
            </label>
            <span className="text-gray-600">&nbsp;</span>
          </div>
          <button type="submit" className="w-full h-11 bg-primary text-white rounded-lg hover:brightness-110 transition cursor-pointer bg-primary">Se connecter</button>
        </form>
        <div className="my-6 flex items-center gap-4 text-xs text-gray-500">
          <div className="h-px bg-gray-200 flex-1" />
          <span>Se connecter avec</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="h-11 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.876 31.91 29.35 35 24 35c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.31 0 6.31 1.23 8.598 3.242l5.657-5.657C34.871 3.053 29.706 1 24 1 10.745 1 0 11.745 0 25s10.745 24 24 24s24-10.745 24-24c0-1.627-.167-3.217-.389-4.917Z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.454 15.565 18.847 13 24 13c3.31 0 6.31 1.23 8.598 3.242l5.657-5.657C34.871 3.053 29.706 1 24 1 15.317 1 7.862 6.065 6.306 14.691Z"/><path fill="#4CAF50" d="M24 49c5.263 0 10.09-1.99 13.763-5.237l-6.348-5.361C29.349 40.091 26.833 41 24 41c-5.322 0-9.8-3.016-12.464-7.623l-6.476 4.985C8.315 44.94 15.623 49 24 49Z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a11.996 11.996 0 0 1-4.098 5.804l.003-.002l6.348 5.36C36.793 40.693 48 34 48 25c0-1.627-.167-3.217-.389-4.917Z"/></svg>
            <span>Google</span>
          </button>
          <button type="button" className="h-11 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.417 2.237-1.176 3.109-.763.88-2.033 1.55-3.285 1.457-.136-1.08.4-2.265 1.1-3.034.79-.89 2.2-1.53 3.36-1.532.012.0.0 0 .0 0ZM20.98 17.02c-.643 1.494-1.412 2.98-2.545 4.55-1.09 1.5-2.326 3.013-3.996 3.03-1.53.016-2.018-.98-3.745-.98-1.728 0-2.26.95-3.77.997-1.667.047-2.938-1.62-4.03-3.115-2.196-3.03-3.876-8.566-1.62-12.31 1.044-1.778 2.908-2.906 4.935-2.93 1.542-.03 2.997 1.03 3.745 1.03.747 0 2.57-1.274 4.33-1.086.737.03 2.813.29 4.14 2.18-.108.07-2.476 1.45-2.45 4.32.03 3.44 3.02 4.6 3.05 4.61-.03.09-.474 1.63-1.044 3.8Z"/></svg>
            <span>Apple</span>
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          {/* @ts-expect-error - Route types will include /auth/register once created */}
          Vous n'avez pas un compte ? <Link to="/auth/register" className="text-primary hover:underline">Inscrivez vous</Link>
        </div>
      </div>
    </div>
  )
}
