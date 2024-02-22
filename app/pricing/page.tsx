import Link from 'next/link'
import { PiCheckCircleFill } from 'react-icons/pi'

import { Navbar } from '@/components/navbar'

const plans = [
  {
    index: 0,
    name: 'Basic',
    price: 'US $499',
    features: [
      'Fully responsive on all screens',

      'Design + Development',

      'Private communication channel',
      '1-3 days turnaround time',
    ],
    style:
      'rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
    description:
      'Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.',
    button: 'Buy Now',
  },
  {
    index: 1,
    name: 'Premium',
    price: 'US $1299',
    features: [
      'Fully responsive on all screens',
      'React / Next.js / Tailwind CSS code',
      'Design + Development',
      '24-hour support response time',
      'Private communication channel',
      '3-5 days turnaround time',
    ],
    style:
      ' rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
    description:
      'Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.',
    button: 'Buy Now',
  },
  {
    index: 2,
    name: 'Enterprise',
    feature: 'Contact Us',
    price: "Let's Talk!",
    features: [
      'Fully responsive on all screens',
      'React / Next.js / Tailwind CSS code',
      'Design + Development',
      'Unlimited Revisions',
      '24-hour support response time',
      'Private communication channel',
      'Priority Development Queue',
      'Dedicated Project Manager',
    ],
    style:
      'h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50',
    description:
      'Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.',
    button: 'Contact Us',
  },
]

const PricingPage = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Navbar />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text px-6 pb-10 text-center text-5xl text-slate-300 text-transparent md:pb-20">
          Simple Pricing
          <br />
          Choose your plan
        </div>

        <div className="grid cursor-pointer items-start gap-6 px-6 pb-20 md:w-4/5 md:grid-cols-3 2xl:w-3/4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-3xl border px-6"
            >
              <div className={plan.style}>
                <div className="flex items-center text-4xl font-medium">
                  {plan.name}
                  {plan.feature === 'Contact Us' && (
                    <div className="ml-4 items-center rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-600">
                      Contact Us
                    </div>
                  )}
                </div>

                <p className="pt-6 text-3xl">{plan.price}</p>

                <p className="py-6">{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 py-2 text-lg">
                      {plan.feature === 'Contact Us' ? (
                        <PiCheckCircleFill className="mr-2 text-xl text-blue-400" />
                      ) : (
                        <PiCheckCircleFill className="mr-2 text-xl text-green-600" />
                      )}

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href={'https://buy.stripe.com/6oEg1WdsibFr1EYbIK'}
                    className="mx-auto my-4 flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-blue-300 py-2 text-white"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href={'https://buy.stripe.com/14k2b65ZQ8tf5Ve28c'}
                    className="mx-auto my-4 flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-blue-300 py-2 text-white"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href={'/contact'}
                    className="mx-auto my-4 flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-purple-500 to-blue-300 py-2 text-white"
                  >
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage
