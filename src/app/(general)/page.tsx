'use client'

import Notice from '@/components/Modal/Notice'
import HeroSection from '@/components/Sections/HeroSection'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/notice')
  }, [router])

  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
      </div>
    </main>
  )
}
