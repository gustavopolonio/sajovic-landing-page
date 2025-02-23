import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { FAQ } from '@/components/sections/FAQ'
import { Office } from '@/components/sections/Office'
import { HighlightedText } from '@/components/layout/HighlightedText'
import sectionBgImage from '/sectionBgImage.avif'
import { Link } from 'react-router-dom'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main>
        <Hero />

        <HighlightedText
          uppercase
          text="correspondente criminal para auxílio e parceria com outros advogados"
        />

        <Services />

        <HighlightedText
          size="md"
          text="Precisa de ajuda com alguma outra demanda jurídica? Nós podemos te ajudar! Nossos advogados também atuam em outras áreas do direito, como Direito de Família e Sucessões, Direito Civil, Direito Imobiliário, Contratos, Direito Trabalhista e Direito do Consumidor."
        />

        <About />

        <HighlightedText
          uppercase
          text="atendimento profissional e humanizado"
        />

        <Office />

        <div className="flex flex-col relative w-full text-[44px] leading-[56px] text-[#010101] font-bold text-center mt-8 max-lg:text-[35.2px] max-lg:leading-[44.8px] max-md:text-[28px] max-md:leading-[34px]">
          <img
            loading="lazy"
            src={sectionBgImage}
            className="absolute h-full w-full object-cover inset-0"
            alt="Background"
          />
          <div className="relative bg-[rgba(0,0,0,0.58)] flex w-full flex-col items-center justify-center px-20 py-28 max-lg:py-[89.6px] max-md:px-5 max-md:py-[60px]">
            <div className="w-full max-w-[1080px]">
              <div className="text-white uppercase">
                foi preso em flagrante? tem algum familiar que foi preso? está
                sendo processado ou acusado? precisa tirar dúvidas de como
                funciona um processo?
              </div>
              <div className="text-white uppercase mt-[98px] max-md:mt-10">
                se você está enfrentando acusações criminais, não enfrente esse
                desafio sozinho. proteja seus direitos e garanta a melhor defesa
                contratando um advogado criminalista experiente e dedicado.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full overflow-hidden text-[#010101] px-20 py-4 max-md:px-4 max-md:py-3">
          <div className="flex flex-col items-center gap-3 max-w-[1080px] mx-auto max-lg:gap-y-2 max-md:gap-y-1.5">
            <h2 className="text-[40px] font-bold text-center text-white max-lg:text-[32px] max-md:text-[25.6px]">
              Acompanhe nossas redes sociais
            </h2>
            <Link
              to="https://www.instagram.com/adv.sajovic"
              target="_blank"
              className="flex items-center gap-3 text-2xl text-white transition-all duration-300 hover:opacity-85 hover:underline"
            >
              <img
                loading="lazy"
                src="/instagram.png"
                className="w-[30px] h-[30px] object-contain"
                alt="Social Media Icon"
              />
              <span className="max-lg:text-[19.2px] max-md:text-base">
                @ ADV.SAJOVIC
              </span>
            </Link>
          </div>
        </div>

        <FAQ />
      </main>

      <Footer />

      <div className="flex justify-center items-center py-2 text-center max-lg:px-4 max-md:text-sm">
        <p>
          Sajovic Sociedade de Advogados – Todos os direitos reservados |
          Desenvolvido por{' '}
          <Link
            to="https://www.linkedin.com/in/gustavo-polonio/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gustavo Polonio
          </Link>
        </p>
      </div>

      <WhatsAppButton />
    </div>
  )
}

export default Index
