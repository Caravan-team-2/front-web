import { Link, redirect } from '@tanstack/react-router'
import { getDefaultStore } from 'jotai'
import { authAtom } from '@/atoms/auth'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { EyeIcon } from '@/components/icons/EyeIcon'
import { useState } from 'react'
import type React from 'react'

export function RegisterForm() {
  const store = getDefaultStore()
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')
    const password2 = String(formData.get('password2') || '')

    if (!name || !email || !password || password !== password2) return

    // Redirect to additional info instead of home
    throw redirect({ to: '/auth/register/additional' })
  }

  return (
    <div className="w-full max-w-xl">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-primary mb-3">Bienvenue sur Assurini</h1>
          <p className="text-sm text-gray-500 mt-1">Inscrivier vous</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#1d2b4f] ">Nom & prénom</label>
              <input id="name" name="name" type="text" placeholder="Enter your name" autoComplete="name" required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#1d2b4f]">Email</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-[#1d2b4f]">Mot de passe</label>
            <div className="relative">
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="new-password" required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-10" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <EyeIcon isVisible={showPassword} onClick={() => setShowPassword(!showPassword)} />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password2" className="text-sm font-medium text-[#1d2b4f]">Confirmer votre mot de passe</label>
            <div className="relative">
              <input id="password2" name="password2" type={showPassword2 ? 'text' : 'password'} placeholder="Enter your password" autoComplete="new-password" required className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-10" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <EyeIcon isVisible={showPassword2} onClick={() => setShowPassword2(!showPassword2)} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-gray-600">
              <input type="checkbox" name="remember" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <span>Se souvenir de moi</span>
            </label>
          </div>
          <button type="submit" className="w-full h-11 bg-primary text-white rounded-lg hover:brightness-110 transition">Continuer</button>
        </form>
        <div className="my-6 flex items-center gap-4 text-xs text-gray-500">
          <div className="h-px bg-gray-200 flex-1" />
          <span>S'inscrire avec</span>
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
          Vous avez un compte ? <Link to="/auth/login" className="text-primary hover:underline">Connectez‑vous</Link>
        </div>
      </div>
    </div>
  )
}
