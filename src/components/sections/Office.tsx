import { Slick } from '@/components/ui/Slick'

export const Office = () => {
  const images = [
    '/office1.avif',
    '/office2.avif',
    '/office3.avif',
    '/office4.avif',
  ]

  return (
    <section className="py-16 max-w-[1080px] mx-auto max-lg:py-[51.2px] max-lg:px-4">
      <h2 className="font-serif text-black text-[40px] font-bold text-center mb-2 max-lg:text-[32px]">
        Nosso Escritório
      </h2>

      <Slick
        slidesToShow={3}
        slidesToScroll={3}
        items={images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image}
            className="mx-3 aspect-[1.33] object-cover w-full rounded-xl"
            alt={`Office Image ${index + 1}`}
          />
        ))}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 590,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      />
    </section>
  )
}
