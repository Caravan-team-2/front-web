import { Link, redirect } from '@tanstack/react-router'
import { getDefaultStore } from 'jotai'
import { authAtom } from '@/atoms/auth'
import { useState } from 'react'
import type React from 'react'

type SelectFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  required?: boolean
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-sm font-medium text-[#1d2b4f] block">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-4 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-primary focus:border-primary pr-10"
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function AdditionalInfoHeader() {
  return (
    <div className="mb-3 ml-10 w-full">
      <div className="flex gap-2 w-full ">
        <h1 className="text-xl font-semibold text-primary border-b-4 border-primary pb-2 decoration-2 underline-offset-4 inline-block">
          Additional informations
        </h1>
        <div className="w-full border-b border-gray-200" />
      </div>
    </div>
  )
}

function AdditionalInfoNote() {
  return (
    <div className="mt-6 p-4 bg-[#86AFD60F] border-2 border-blue-200 rounded-lg inline-block">
      <p className="text-sm font-medium text-blue-800">Note : Il faut remplir ces sections</p>
    </div>
  )
}

export function AdditionalInfoForm() {
  const store = getDefaultStore()
  const [formData, setFormData] = useState({
    wilaya: '',
    assurance: '',
    agence: '',
    role: ''
  })

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formData.wilaya || !formData.assurance || !formData.agence || !formData.role) return

    // TODO: call service layer to save additional info
    store.set(authAtom, { user: { id: '1', role: 'user' } })
    throw redirect({ to: '/' })
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const selectFields = [
    {
      id: 'wilaya',
      label: 'Wilaya',
      value: formData.wilaya,
      onChange: (value: string) => handleSelectChange('wilaya', value),
      options: [
        { value: '', label: 'Sélectionner une wilaya' },
        { value: 'alger', label: 'Alger' },
        { value: 'oran', label: 'Oran' },
        { value: 'constantine', label: 'Constantine' },
        { value: 'blida', label: 'Blida' },
        { value: 'setif', label: 'Sétif' },
        { value: 'annaba', label: 'Annaba' },
        { value: 'batna', label: 'Batna' },
        { value: 'tlemcen', label: 'Tlemcen' },
      ],
      required: true,
    },
    {
      id: 'assurance',
      label: 'Assurance',
      value: formData.assurance,
      onChange: (value: string) => handleSelectChange('assurance', value),
      options: [
        { value: '', label: 'Sélectionner une assurance' },
        { value: 'macir', label: 'MACIR' },
        { value: 'axa', label: 'AXA' },
        { value: 'allianz', label: 'Allianz' },
        { value: 'zurich', label: 'Zurich' },
        { value: 'cnma', label: 'CNMA' },
        { value: 'saa', label: 'SAA' },
      ],
      required: true,
    },
    {
      id: 'agence',
      label: 'Agence',
      value: formData.agence,
      onChange: (value: string) => handleSelectChange('agence', value),
      options: [
        { value: '', label: 'Sélectionner une agence' },
        { value: 'centre', label: 'Centre' },
        { value: 'nord', label: 'Nord' },
        { value: 'sud', label: 'Sud' },
        { value: 'est', label: 'Est' },
        { value: 'ouest', label: 'Ouest' },
        { value: 'kabylie', label: 'Kabylie' },
      ],
      required: true,
    },
    {
      id: 'role',
      label: 'Role',
      value: formData.role,
      onChange: (value: string) => handleSelectChange('role', value),
      options: [
        { value: '', label: 'Sélectionner un rôle' },
        { value: 'client', label: 'Client' },
        { value: 'agent', label: 'Agent' },
        { value: 'expert', label: 'Expert' },
        { value: 'manager', label: 'Manager' },
        { value: 'supervisor', label: 'Superviseur' },
      ],
      required: true,
    },
  ]

  return (
    <>
      <div className="w-full max-w-xl">
        <div className="bg-white rounded-2xl p-8 md:p-10 ">
          <AdditionalInfoNote />
          <form className="space-y-8 mt-8" onSubmit={onSubmit}>
            {selectFields.map(field => (
              <SelectField
                key={field.id}
                id={field.id}
                label={field.label}
                value={field.value}
                onChange={field.onChange}
                options={field.options}
                required={field.required}
              />
            ))}
            <button type="submit" className="w-1/2 h-12 bg-primary text-white rounded-lg hover:brightness-110 transition font-medium text-lg">
              Confirmer
            </button>
          </form>
        </div>
      </div>
    </>
  )
}