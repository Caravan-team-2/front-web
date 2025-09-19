import { Link, redirect } from '@tanstack/react-router'
import { getDefaultStore } from 'jotai'
import { authAtom } from '@/atoms/auth'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
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
          <div className="space-y-3">
            <label htmlFor="email" className="text-md text-black font-[400]">Email</label>
            <input id="email" name="email" type="email" placeholder="Entrer votre email" autoComplete="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary " />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-md font-[400] text-black">Password</label>
              {/* @ts-expect-error - Route types will include /auth/forgot once created */}
              <Link to="/auth/forgot" className="text-sm text-gray-600 hover:underline">Mot de passe ?</Link>
            </div>
            <div className="relative">
              <input id="password" name="password" type="password" placeholder="Entrer votre mot de passe" autoComplete="current-password" required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="currentColor"/></svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-gray-600">
              <input type="checkbox" name="remember" className="h-4 w-4 rounded border-Slate 500 text-primary focus:ring-primary" />
              <span>Se souvenir de moi</span>
            </label>
            <span className="text-gray-600">&nbsp;</span>
          </div>
          <button type="submit" className="w-full h-11  text-white rounded-lg hover:brightness-110 transition cursor-pointer bg-primary">Se connecter</button>
        </form>
        <div className="my-6 flex items-center gap-4 text-xs text-gray-500">
          <div className="h-px bg-gray-200 flex-1" />
          <span>Se connecter avec</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="h-11 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50">
          <FcGoogle size={20} />          
            <span>Google</span>
          </button>
          <button type="button" className="h-11 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50">
          <FaApple size={20} />         
             <span>Apple</span>
          </button>
        </div>
        <div className="mt-6 text-center text-md text-[#94A3B8] font-[500]">
          {/* @ts-expect-error - Route types will include /auth/register once created */}
          Vous n'avez pas un compte ? <Link to="/auth/register" className="text-primary hover:underline ">Inscrivez vous</Link>
        </div>
      </div>
    </div>
  )
}
