import Image from 'next/image'
import { Lora } from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Lora({
  subsets: ['latin'],
  weight: ['400'],
})

const logos = [
  '/logos/logoipsum-225.svg',
  '/logos/logoipsum-245.svg',
  '/logos/logoipsum-247.svg',
  '/logos/logoipsum-248.svg',
  '/logos/logoipsum-249.svg',
  '/logos/stripelogo.png',
]

export const Brands = () => {
  return (
    <div className="relative z-10 mx-auto w-full p-4 pt-20 md:pt-32">
      <div className="bg-opacity-50 bg-gradient-to-b from-purple-500 to-sky-200 bg-clip-text text-center text-4xl text-transparent md:pb-8 md:text-7xl">
        The best brands
        <br />
        choose us
      </div>

      <p className="mx-auto mt-4 max-w-lg text-center text-lg font-normal text-neutral-300">
        From small business to large corporations, we have helped many brands elevate their
        business.
      </p>

      <div className="mx-auto grid cursor-pointer grid-cols-3 items-center justify-center md:w-3/5">
        {logos.map((item, index) => (
          <div className="p-4 md:p-20" key={index}>
            <Image
              src={item}
              alt="logo image"
              priority
              width={500}
              height={500}
              className="h-auto w-full max-w-full rounded-lg"
            />
          </div>
        ))}
      </div>

      <div
        className={cn(
          'flex items-center justify-center px-8 pb-4 pt-10 text-center text-xl text-white md:pt-0 xl:text-2xl',
          font.className,
        )}
      >
        &quot;We got rid of nearly a dozen different tools because of what Bird does for us.&quot;
      </div>

      <div className="flex flex-col items-center justify-center text-white">
        <Image
          src={'/images/logo.svg'}
          alt="logo"
          width={1000}
          height={1000}
          className="pt-2 xl:w-14 xl:pt-0"
        />

        <div className="text-center">
          <p className="pt-4 text-sm font-medium">Carlos Hernandez</p>
          <p className="text-sm capitalize">Marketing Director, Palium Software</p>
        </div>
      </div>
    </div>
  )
}
