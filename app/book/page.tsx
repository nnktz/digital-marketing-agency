'use client'

import { InlineWidget } from 'react-calendly'

import { Navbar } from '@/components/navbar'

const BookPage = () => {
  const calendlyUrl = 'https://calendly.com/nguyenminhnhat/30min'

  return (
    <div className="flex h-screen w-full flex-col bg-black/[0.96]">
      <Navbar />

      <div className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-5 text-center text-4xl text-transparent md:text-6xl">
        Book a meeting
      </div>

      <InlineWidget url={calendlyUrl} />
    </div>
  )
}

export default BookPage
