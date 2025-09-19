import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/features/auth/components/LoginForm'
import { LoginHeroImage } from '@/features/auth/components/LoginHeroImage'

export const Route = createFileRoute('/auth/login')({
  component: LoginPage,
  validateSearch: (search: Record<string, unknown>) => search as { redirect?: string },
})

function LoginPage() {
  return (
    <div className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 bg-white">
      <div className="flex items-center justify-center p-6 md:p-10">
        <LoginForm />
      </div>
      <div className="hidden md:block">
        <LoginHeroImage />
      </div>
    </div>
  )
}
