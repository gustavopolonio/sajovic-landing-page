import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Office } from "@/components/sections/Office";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />
      <main>
        <Hero />

        <div className="bg-[rgba(27,27,27,1)] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] w-full overflow-hidden text-[32px] text-[#010101] font-bold text-center px-[70px] py-[25px] max-md:px-5">
          CORRESPONDENTE CRIMINAL PARA
          <br />
          AUXÍLIO E PARCERIA COM OUTROS ADVOGADOS
        </div>

        <Services />

        <div className="bg-[rgba(27,27,27,1)] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] w-full overflow-hidden text-[22px] text-[#010101] font-bold text-center leading-7 px-[70px] py-[13px] max-md:px-5">
          Precisa de ajuda com alguma outra demanda jurídica? Nós podemos te
          ajudar! Nossos advogados
          <br />
          também atuam em outras áreas do direito, como Direito de Família e
          Sucessões,
          <br />
          Direito Civil, Direito Imobiliário, Contratos, Direito Trabalhista e
          Direito do Consumidor.
        </div>

        <About />

        <div className="bg-[rgba(27,27,27,1)] shadow-[0px_6px_4px_rgba(0,0,0,0.25)] w-full overflow-hidden text-[32px] text-[#010101] font-bold text-center px-[70px] py-[25px] max-md:px-5">
          ATENDIMENTO PROFISSIONAL E HUMANIZADO
        </div>

        <Office />

        <div className="flex flex-col relative min-h-[817px] w-full text-[44px] text-[#010101] font-bold text-center mt-[60px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0932d0cc8f369a42626af81a8efdafbc3e549610d7d8b38cbbd98eda00cd54b7?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/0932d0cc8f369a42626af81a8efdafbc3e549610d7d8b38cbbd98eda00cd54b7?placeholderIfAbsent=true&width=2000 2000w"
            className="absolute h-full w-full object-cover inset-0"
            alt="Background"
          />
          <div className="relative bg-[rgba(0,0,0,0.58)] flex w-full flex-col items-center justify-center px-20 py-[120px] max-md:px-5 max-md:py-[100px]">
            <div className="mb-[-22px] w-full max-w-[1074px] max-md:mb-2.5">
              <div className="ml-3.5 mr-[15px] max-md:mr-2.5">
                FOI PRESO EM FLAGRANTE? TEM ALGUM FAMILIAR QUE FOI PRESO? ESTÁ
                SENDO PROCESSADO OU ACUSADO? PRECISA TIRAR DÚVIDAS DE COMO
                FUNCIONA UM PROCESSO?
              </div>
              <div className="mt-[121px] max-md:mt-10">
                SE VOCÊ ESTÁ ENFRENTANDO ACUSAÇÕES CRIMINAIS, NÃO ENFRENTE ESSE
                DESAFIO SOZINHO. PROTEJA SEUS DIREITOS E GARANTA A MELHOR DEFESA
                CONTRATANDO UM ADVOGADO CRIMINALISTA EXPERIENTE E DEDICADO.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full overflow-hidden text-[#010101] px-20 py-4 max-md:px-5">
          <div className="flex flex-col items-center">
            <h2 className="text-[40px] font-bold text-center text-white">
              Acompanhe nossas redes sociais
            </h2>
            <div className="flex items-center gap-3 text-2xl text-white mt-7">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/73510836d3c2d701362becd79c24ded608d94dcbd785a6153716dcc4c1d1e1b7"
                className="w-[30px] h-[30px] object-contain"
                alt="Social Media Icon"
              />
              <span>@ ADV.SAJOVIC</span>
            </div>
          </div>
        </div>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
