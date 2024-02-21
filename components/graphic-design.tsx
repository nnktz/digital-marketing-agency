import { motion } from 'framer-motion'

import { ThreeDCardSnippet } from './snippets/3d-card-snippet'
import { EvervaultCardSnippet } from './snippets/evervault-card-snippet'

export const GraphicDesign = () => {
  return (
    <>
      <div className="relative z-10 mx-auto w-full p-4 px-2 pt-10 text-white md:pt-20">
        <div className="bg-opacity-50 bg-gradient-to-b from-purple-500 to-sky-200 bg-clip-text px-6 pb-5 text-center text-4xl text-transparent md:text-7xl">
          Graphic Design
        </div>

        <p className="mx-auto mt-4 max-w-lg px-4 text-center text-lg font-normal text-neutral-300">
          We create stunning visuals for your brand. From logos to social media posts, we&apos;ve
          got you covered.
        </p>
      </div>

      <div className="items-center justify-center md:mx-auto md:flex md:space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <ThreeDCardSnippet />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <EvervaultCardSnippet />
        </motion.div>
      </div>
    </>
  )
}
