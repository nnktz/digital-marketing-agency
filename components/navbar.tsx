'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'

import { DropdownMenu } from './dropdown-menu'

interface NavbarProps {
  scrollToWebsiteDesign?: () => void
  scrollToGraphicDesign?: () => void
  scrollToShopifyStores?: () => void
  scrollToBrands?: () => void
}

export const Navbar = ({
  scrollToBrands,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToWebsiteDesign,
}: NavbarProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev)
  }

  const closeDropdown = () => {
    setIsDropdownVisible(false)
  }

  return (
    <div className="z-50 flex items-center justify-between p-6 md:p-10">
      <Link href={'/'} className="select-none">
        <Image
          src={'/logo.svg'}
          alt="logo"
          width={100}
          height={100}
          className="h-10 w-10 md:h-14 md:w-14"
        />
      </Link>

      <div className="hidden cursor-pointer items-center space-x-10 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-slate-300 text-transparent md:flex">
        <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
          Website Design
        </div>
        <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
          Graphic Design
        </div>
        <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
          Shopify Stores
        </div>
        <div onClick={scrollToBrands} className="hover:text-gray-50">
          Brands
        </div>

        <Link href={'/pricing'} className="hover:text-gray-50">
          Pricing
        </Link>
      </div>

      <div className="flex md:hidden">
        {isDropdownVisible ? (
          <div
            className="h-8 w-8 cursor-pointer text-slate-300 hover:text-opacity-80"
            onClick={closeDropdown}
          >
            <X className="h-full w-full" />
            <DropdownMenu />
          </div>
        ) : (
          <AlignJustify
            className="h-8 w-8 cursor-pointer text-slate-300 hover:text-opacity-80"
            onClick={toggleDropdown}
          />
        )}
      </div>

      <div className="ml-10 hidden md:flex">
        <Link
          href={'/contact'}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
