'use client'

import HeroSection from '@/components/Sections/HeroSection'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  // useEffect(() => {
  //   router.replace('/notice')
  // }, [router])

  return (
    <main className='flex min-h-screen flex-col bg-blue'>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
      </div>
    </main>
  )
}
