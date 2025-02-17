import { ServiceCard } from "../ui/ServiceCard";

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/a25406f3c0925792af08b32edcee6946083791f473bc94710473f37710ac8b7a",
    title: "ATENDIMENTO E REPRESENTAÇÃO EM DELEGACIAS",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/7a3560c206b01013edc5b86149bfaf26d3cc03b28b3c5075ae1918cf1dd78a35",
    title: "ATENDIMENTO E REPRESENTAÇÃO EM DELEGACIAS",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0d2e9fdc13f4e1edad72565d65232c1e4db9eba8af3e33419197079076971a0c",
    title: "ATENDIMENTO E REPRESENTAÇÃO EM DELEGACIAS",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/be226b2acadfb9fd0a6815694dfb087aaa5035b6e10bed8d2d400c53505f2445",
    title: "ATENDIMENTO E REPRESENTAÇÃO EM DELEGACIAS",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/26aef060ce10b028cb84916bc2f8b29c5921f41035d1ae222cf3af4401b038c6",
    title: "ATENDIMENTO E REPRESENTAÇÃO EM DELEGACIAS",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/c8d4df97f8e32ead6e0d3cafeaeb98beeb3532f76daffa00294d50c7b32184b8",
    title: "ATENDIMENTO E REPRESENTAÇÃO EM DELEGACIAS",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16">
      <h2 className="text-black text-[40px] font-bold text-center mb-10">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1080px] mx-auto px-4">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </section>
  );
};
