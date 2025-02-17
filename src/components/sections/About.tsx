export const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1080px] mx-auto mt-[60px] px-4 max-md:mt-10"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[68%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-[22px] text-black font-normal max-md:max-w-full max-md:mt-10">
            <h2 className="text-[32px] font-bold max-md:max-w-full">
              Dr. Gabriel Sajovic Pereira - OAB/SP 468.830
              <br />
            </h2>
            <p className="leading-7 mt-[34px] max-md:max-w-full">
              Advogado Criminalista especialista em Direito Penal, Processo
              Penal e Execução Penal.
            </p>
            <p className="leading-7 mt-[18px] max-md:max-w-full max-md:mr-2.5">
              Pós-Graduado em Ciências Penais pela Escola Superior de Advocacia
              (ESA) e conta com diversos cursos práticos e teóricos de
              especialização realizados.
            </p>
            <p className="leading-7 mt-[18px] max-md:max-w-full max-md:mr-2.5">
              Com ampla experiência na Advocacia Criminal, destaca-se pela
              competência técnica e pelo compromisso na defesa de seus clientes,
              sempre pautado pela ética, humanidade e excelência profissional.
            </p>
            <p className="leading-7 mt-[18px] max-md:max-w-full">
              Seu trabalho abrange temas como execução penal, lei de drogas,
              crimes econômicos, recursos processuais, lei maria da penha,
              relaxamento de prisão, habeas corpus e tribunal do júri. Essa
              sólida formação e experiência o torna um profissional altamente
              qualificado para atuar nos mais diversos desafios do Direito
              Penal.
            </p>
          </div>
        </div>
        <div className="w-[32%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/62f6a2bb181bbed2ea4419065163a23ea51b5e15dd75305b5909351a4a598083?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/62f6a2bb181bbed2ea4419065163a23ea51b5e15dd75305b5909351a4a598083?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/62f6a2bb181bbed2ea4419065163a23ea51b5e15dd75305b5909351a4a598083?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/62f6a2bb181bbed2ea4419065163a23ea51b5e15dd75305b5909351a4a598083?placeholderIfAbsent=true&width=800 800w"
            className="aspect-[0.79] object-contain w-full grow mt-6 rounded-xl max-md:mt-10"
            alt="Dr. Gabriel Sajovic Pereira"
          />
        </div>
      </div>
    </section>
  );
};
