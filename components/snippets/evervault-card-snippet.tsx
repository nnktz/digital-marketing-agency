import { EvervaultCard, Icon } from '../ui/evervault-card'

export function EvervaultCardSnippet() {
  return (
    <div className="relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-white/[0.2] p-4">
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-white" />

      <EvervaultCard text="hover" />

      <h2 className="mt-4 text-sm font-light text-white">
        Hover over this card to reveal an awesome effect. Running out of copy here.
      </h2>
      <p className="mt-4 rounded-full border border-white/[0.2] px-2 py-0.5 text-sm font-light text-white">
        Watch me hover
      </p>
    </div>
  )
}
