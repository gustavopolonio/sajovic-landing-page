export const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1080px] mx-auto px-4 py-16 max-lg:py-[51.2px] max-md:py-10 max-md:scroll-mt-[74.61px]"
    >
      <div className="gap-5 flex items-center max-lg:items-start max-md:items-stretch max-md:gap-4 max-sm:flex-col">
        <div className="w-[68%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-[22px] text-black font-normal max-md:max-w-full">
            <h2 className="text-[32px] font-bold max-lg:leading-[34px] max-lg:text-[25.6px] max-md:max-w-full max-md:text-[20px]">
              Dr. Gabriel Sajovic Pereira - OAB/SP 468.830
            </h2>
            <p className="leading-7 mt-8 max-lg:text-[17.6px] max-lg:leading[25px] max-lg:mt-[25.6px] max-md:max-w-full max-md:text-base max-md:mt-[20px]">
              Advogado Criminalista especialista em Direito Penal, Processo
              Penal e Execução Penal.
            </p>
            <p className="leading-7 mt-[9.6px] max-lg:text-[17.6px] max-lg:leading[25px] max-md:max-w-full max-md:text-base max-md:mt-[7px]">
              Pós-Graduado em Ciências Penais pela Escola Superior de Advocacia
              (ESA) e conta com diversos cursos práticos e teóricos de
              especialização realizados.
            </p>
            <p className="leading-7 mt-[9.6px] max-lg:text-[17.6px] max-lg:leading[25px] max-md:max-w-full max-md:text-base max-md:mt-[7px]">
              Com ampla experiência na Advocacia Criminal, destaca-se pela
              competência técnica e pelo compromisso na defesa de seus clientes,
              sempre pautado pela ética, humanidade e excelência profissional.
            </p>
            <p className="leading-7 mt-[9.6px] max-lg:text-[17.6px] max-lg:leading[25px] max-md:max-w-full max-md:text-base max-md:mt-[7px]">
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
            src="/gabriel-sajovic.avif"
            className="w-full grow rounded-xl shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
            alt="Dr. Gabriel Sajovic Pereira"
          />
        </div>
      </div>
    </section>
  )
}
