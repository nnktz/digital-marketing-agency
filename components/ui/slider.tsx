import Slider from 'react-slick'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const SliderUI = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 765, maxWidth: 1023 })
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: 'w-full mx-auto cursor-pointer center-mode',
  }

  if (isMediumScreen) {
    settings.slidesToShow = 1.67
  } else if (isSmallScreen) {
    settings.slidesToShow = 1
  }

  return (
    <Slider {...settings}>
      <div className="rounded-md px-2 md:p-10">
        <Image
          src={'/images/small-business-3.webp'}
          alt="image slider"
          priority
          width={500}
          height={500}
          className="rounded-2xl"
        />
      </div>

      <div className="rounded-md px-2 md:p-10">
        <Image
          src={'/images/business.jpeg'}
          alt="image slider"
          priority
          width={500}
          height={500}
          className="rounded-2xl"
        />
      </div>

      <div className="rounded-md px-2 md:p-10">
        <Image
          src={'/images/coffee.jpeg'}
          alt="image slider"
          priority
          width={500}
          height={500}
          className="rounded-2xl"
        />
      </div>

      <div className="rounded-md px-2 md:p-10">
        <Image
          src={'/images/image-business.jpeg'}
          alt="image slider"
          priority
          width={500}
          height={500}
          className="rounded-2xl"
        />
      </div>
    </Slider>
  )
}
