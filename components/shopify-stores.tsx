import Image from 'next/image'

const stores = [
  {
    image: '/images/image2.png',
    quote: 'Bird showed us to get started, what to do, and how to do it.',
    name: 'Jason Scer',
  },
  {
    image: '/images/shop-2.jpeg',
    quote:
      'We had no idea how to get started, but Bird showed us the way. And we were able to create something amazing.',
    name: 'John Prency',
  },
  {
    image: '/images/s-2.webp',
    quote:
      'The team at Bird is amazing. They helped us create a stunning store that we are proud of.',
    name: 'Miguel Martinez',
  },
]

export const ShopifyStores = () => {
  return (
    <section className="mt-10 w-full rounded-3xl bg-[#f6f5f4] md:py-10">
      <div className="relative z-10 mx-auto w-full p-4">
        <div className="bg-clip-text py-10 text-center text-4xl md:pb-8 md:text-7xl">
          Shopify Stores
        </div>

        <p className="mx-auto mt-4 max-w-lg text-center text-lg font-normal text-neutral-800">
          We create stunning Shopify Stores that are designed to convert.
        </p>

        <div className="items-center justify-center px-10 md:flex">
          {stores.map((store, index) => (
            <div
              key={index}
              className="mx-auto mt-10 flex flex-col items-center justify-center md:w-2/3"
            >
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={store.image}
                  alt="shopify store image"
                  width={400}
                  height={400}
                  className="mx-auto rounded-lg"
                />

                <p className="mt-4 text-center text-lg font-bold text-neutral-800">
                  &quot;{store.quote}&quot;
                </p>

                <p className="mt-4 text-lg font-bold text-neutral-800">- {store.name} -</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
