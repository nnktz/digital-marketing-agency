import { CardHoverEffectSnippet } from './snippets/card-hover-effect-snippet'

export const Services = () => {
  return (
    <div className="mx-auto max-w-5xl py-20">
      <div className="mt-20 bg-opacity-50 bg-gradient-to-b from-blue-500 to-neutral-50 bg-clip-text text-center text-4xl text-transparent md:text-7xl">
        Streamline your business with our services
      </div>

      <p className="mx-auto mt-4 max-w-lg text-center text-lg font-normal text-neutral-300">
        From website design to social media management, we offer a wide range of services to help
        you grow your business.
      </p>

      <CardHoverEffectSnippet />
    </div>
  )
}
