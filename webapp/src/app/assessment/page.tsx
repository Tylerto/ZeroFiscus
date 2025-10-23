'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import dynamic from 'next/dynamic'

const AssessmentForm = dynamic(() => import('@/components/AssessmentForm'), {
  ssr: false,
  loading: () => <div className="text-center py-8">Formulier laden...</div>
})

export default function AssessmentPage() {
  const router = useRouter()

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-shrink-0 px-4 pt-4 pb-2">
        <Button
          onClick={() => router.push('/')}
          variant="ghost"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar homepage
        </Button>
      </div>

      <div className="flex-1 overflow-hidden">
        <AssessmentForm />
      </div>
    </div>
  )
}