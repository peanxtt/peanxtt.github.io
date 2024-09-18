'use client'

import classNames from '@/lib/classNames'

export default function Notice() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] select-none'>
      <div className='container h-full m-auto flex justify-center items-center'>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <div className='font-monserrat text-2xl text-center'>
            The website is currently under maintenance.
          </div>
          <div
            className={classNames(
              'rounded-full px-6 py-3 cursor-pointer',
              'bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-700',
              'transition-colors duration-150 delay-75'
            )}
          >
            Come back later
          </div>
        </div>
      </div>
    </main>
  )
}
