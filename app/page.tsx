'use client'

import Link from 'next/link'
import { useRef } from 'react'

import { Navbar } from '@/components/navbar'
import { Spotlight } from '@/components/ui/spotlight'
import { SliderUI } from '@/components/ui/slider'
import { WebsiteDesign } from '@/components/website-design'
import { GraphicDesign } from '@/components/graphic-design'
import { ShopifyStores } from '@/components/shopify-stores'
import { Brands } from '@/components/brands'
import { Services } from '@/components/services'
import { Faq } from '@/components/faq'

const HomePage = () => {
  const websiteDesignRef = useRef<HTMLDivElement>(null)
  const graphicDesignRef = useRef<HTMLDivElement>(null)
  const shopifyStoresRef = useRef<HTMLDivElement>(null)
  const brandsRef = useRef<HTMLDivElement>(null)

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Navbar
        scrollToBrands={scrollToBrands}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToWebsiteDesign={scrollToWebsiteDesign}
      />

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

          <div ref={websiteDesignRef}>
            <WebsiteDesign />
          </div>

          <div ref={graphicDesignRef}>
            <GraphicDesign />
          </div>

          <div ref={shopifyStoresRef}>
            <ShopifyStores />
          </div>

          <div ref={brandsRef}>
            <Brands />
          </div>

          <Services />
          <Faq />
        </div>
      </div>
    </div>
  )
}
export default HomePage
