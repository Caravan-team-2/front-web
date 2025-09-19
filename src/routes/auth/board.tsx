import { createFileRoute } from '@tanstack/react-router'
import { AdditionalInfoForm, AdditionalInfoHeader } from '@/features/auth/components/AdditionalInfoForm'
import { AdditionalInfoHeroImage } from '@/features/auth/components/AdditionalInfoHeroImage'

export const Route = createFileRoute('/auth/board')({
  component: AdditionalInfoPage,
})

function AdditionalInfoPage() {
  // Removed console.log for cleaner production code
  return (
    <div className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 mt-0 bg-white m-24 " style={{ overflow: 'hidden' }}>
      <div className="justify-center p-6 md:p-10 flex flex-col items-start w-full">
        <AdditionalInfoHeader />
        <AdditionalInfoForm />
      </div>
      <div className="hidden md:block">
        <AdditionalInfoHeroImage />
      </div>
    </div>
  )
}