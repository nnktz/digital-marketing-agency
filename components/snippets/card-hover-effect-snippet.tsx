import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from 'react-icons/pi'

import { HoverEffect } from '../ui/card-hover-effect'

export function CardHoverEffectSnippet() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: 'Website Design',
    description:
      'We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.',
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiMonitor className="h-8 w-8 text-blue-600" />
      </div>
    ),
  },
  {
    title: 'E-commerce Store',
    description:
      'From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.',
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiStorefront className="h-8 w-8 text-blue-600" />
      </div>
    ),
  },
  {
    title: 'Authentication',
    description:
      'Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.',
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiLock className="h-8 w-8 text-blue-600" />
      </div>
    ),
  },
  {
    title: 'Social Media',
    description:
      'We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.',
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiMegaphone className="h-8 w-8 text-blue-600" />
      </div>
    ),
  },
  {
    title: 'App Development',
    description:
      'We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.',
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiAppStoreLogo className="h-8 w-8 text-blue-600" />
      </div>
    ),
  },
  {
    title: 'Support',
    description:
      'We offer support for all our clients. We are here to help you with any issues or questions you may have.',
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiHeadsetFill className="h-8 w-8 text-blue-600" />
      </div>
    ),
  },
]
