import Image from 'next/image'

export const WebsiteDesign = () => {
  return (
    <>
      <div className="relative z-10 mx-auto w-full p-4 px-2 pt-10 text-white md:pt-20">
        <div className="bg-opacity-50 bg-gradient-to-b from-purple-500 to-sky-200 bg-clip-text px-6 pb-5 text-center text-4xl text-transparent md:text-7xl">
          Website Design <br />
          that works
        </div>

        <p className="mx-auto mt-4 max-w-lg px-4 text-center text-lg font-normal text-neutral-300">
          Creating, designing, and developing websites that work for your business.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt="image gallery"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt="image ga"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt="image ga"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="image ga"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt="image ga"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt="image ga"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt="image ga"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt="image ga"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt="image ga"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt="image ga"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt="image ga"
            />
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt="image ga"
            />
          </div>
        </div>
      </div>
    </>
  )
}
