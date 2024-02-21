import { motion } from 'framer-motion'
import Link from 'next/link'

export const DropdownMenu = () => {
  return (
    <motion.div
      className="absolute left-0 right-0 top-28 z-50 h-screen w-screen space-y-4 rounded-t-3xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 p-6 text-slate-300"
      initial={{ opacity: 0, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-10">
        <Link href="/pricing" className="text-2xl text-black hover:text-neutral-600">
          Pricing
        </Link>
        <Link href="/contact" className="text-2xl text-black hover:text-neutral-600">
          Contact
        </Link>

        <Link href="/book" className="text-2xl text-black hover:text-neutral-600">
          Book a call
        </Link>
      </div>
    </motion.div>
  )
}
