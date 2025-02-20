import { ServiceCard } from '@/components/ui/ServiceCard'
import { Carousel } from '../ui/Carousel'

const services = [
  {
    icon: '/auction.png',
    title: 'Audiência de custódia',
  },
  {
    icon: '/police-station.png',
    title: 'Atendimento e representação em delegacias',
  },
  {
    icon: '/handcuff.png',
    title: 'Defesa criminal',
  },
  {
    icon: '/attorney.png',
    title: 'Habeas corpus',
  },
  {
    icon: '/civil-right.png',
    title: 'Assistente de acusação',
  },
  {
    icon: '/police.png',
    title: 'Execução penal e progressão de regime',
  },
  {
    icon: '/justice-scale.png',
    title: 'Benefícios: remição, indulto e comutação de penas',
  },
  {
    icon: '/commercial.png',
    title: 'Revisão criminal',
  },
  {
    icon: '/courthouse.png',
    title: 'Recursos para os tribunais superiores',
  },
  {
    icon: '/law.png',
    title: 'Crimes contra a honra',
  },
  {
    icon: '/auction-2.png',
    title: 'Tráfico de drogas',
  },
  {
    icon: '/stamp.png',
    title: 'Consulta jurídica',
  },
  {
    icon: '/protect.png',
    title: 'Crimes patrimoniais',
  },
  {
    icon: '/family.png',
    title: 'Violência doméstica',
  },
  {
    icon: '/investigation.png',
    title: 'Análise processual',
  },
]

export const Services = () => {
  return (
    <section
      id="services"
      className="py-16 max-w-[1080px] mx-auto max-lg:px-4 max-lg:py-[51.2px] max-md:py-10"
    >
      <h2 className="font-serif text-black text-[40px] font-bold text-center mb-2 max-lg:text-[32px] max-md:mb-0 max-md:text-[25.6px]">
        Nossos Serviços
      </h2>

      <Carousel
        rows={2}
        slidesToShow={3}
        slidesToScroll={3}
        items={services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
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
            breakpoint: 480,
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
