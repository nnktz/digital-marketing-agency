'use client'

import Link from 'next/link'

import { Navbar } from '@/components/navbar'
import { Spotlight } from '@/components/ui/spotlight'
import { SliderUI } from '@/components/ui/slider'
import { WebsiteDesign } from '@/components/website-design'
import { GraphicDesign } from '@/components/graphic-design'
import { ShopifyStores } from '@/components/shopify-stores'

const HomePage = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Navbar />
      <Spotlight className="left-80 hidden md:flex" fill="white" />
      <div className="relative z-10 mx-auto w-full p-4 px-2 pt-10 md:pt-32">
        <div className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text px-6 pb-5 text-center text-4xl text-transparent md:text-7xl">
          Create, grow, and <br />
          scale your business
        </div>

        <p className="mx-auto mt-4 max-w-lg px-4 text-center text-lg font-normal text-neutral-300">
          Custom tailored solutions for your business. We are a team of creatives who are excited to
          help you grow your business.
        </p>

        <Link
          href={'/book'}
          className="mx-auto my-6 flex w-48 items-center justify-center rounded-full border p-2 text-white"
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderUI />
          <WebsiteDesign />
          <GraphicDesign />
          <ShopifyStores />
        </div>
      </div>
    </div>
  )
}
export default HomePage
