import { Carousel as CarouselAntd } from 'antd'
import { ReactNode } from 'react'

interface CarouselResponsiveProps {
  breakpoint: number
  settings: object
}

interface CarouselItems {
  items: ReactNode[]
  rows?: number
  slidesToShow?: number
  slidesToScroll?: number
  responsive?: CarouselResponsiveProps[]
}

export const Carousel = ({
  items,
  rows = 1,
  slidesToScroll = 1,
  slidesToShow = 1,
  responsive,
}: CarouselItems) => {
  return (
    <CarouselAntd
      arrows
      draggable
      rows={rows}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      responsive={responsive}
    >
      {items.map((item) => item)}
    </CarouselAntd>
  )
}
