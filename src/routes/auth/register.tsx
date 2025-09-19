import { createFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '@/features/auth/components/RegisterForm'
import { RegistrationHeroImage } from '@/features/auth/components/RegistrationHeroImage'

export const Route = createFileRoute('/auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6">
        <div className="flex-[5] flex items-center justify-start p-0 md:p-0 h-[80vh] min-w-[400px] md:min-w-[600px] -ml-6 md:-ml-16 ">
          <RegistrationHeroImage />
        </div>
        <div className="flex-[4] flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-2xl">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
