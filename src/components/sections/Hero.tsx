import { Link } from 'react-router-dom'
import WhatsAppLogo from '/whatsapp.png'
import heroImage from '/hero.png'

export const Hero = () => {
  return (
    <section className="flex flex-col relative w-full text-[#010101] font-bold text-center">
      <img
        loading="lazy"
        src={heroImage}
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero Background"
      />
      <div className="relative bg-[rgba(0,0,0,0.72)] text-white flex w-full flex-col items-center justify-center px-20 py-[91px] max-lg:px-5 max-lg:py-[72px] max-md:py-[46px]">
        <div className="flex w-[884px] max-w-full flex-col items-center">
          <h1 className="font-serif text-[#C9A86A] text-[62px] max-lg:text-[49.6px] max-lg:leading-[59.2px] max-md:max-w-full max-md:text-[40px] text- max-md:leading-[44px]">
            SAJOVIC SOCIEDADE DE ADVOGADOS
          </h1>
          <h2 className="font-serif text-[44px] self-stretch mt-[50px] max-lg:text-[35.2px] max-md:max-w-full max-md:mt-10 max-md:text-[28px]">
            ADVOCACIA CRIMINAL ESPECIALIZADA
          </h2>
          <p className="text-[32px] mt-[67px] max-lg:text-[25.6px] max-md:max-w-full max-md:text-xl max-md:mt-8">
            ATENDIMENTO 24 HORAS PARA FLAGRANTES E DELEGACIAS
          </p>
          <p className="text-[32px] mt-[13px] max-lg:text-[25.6px] max-md:text-xl max-md:mt-8">
            BAURU E TODA REGIÃO
          </p>
          <div className="flex w-[624px] max-w-full items-stretch gap-[40px_75px] flex-wrap mt-[69px] max-md:flex-col max-md:items-center max-md:mt-9 max-md:gap-8">
            <Link
              to="https://wa.me/+5514997501026"
              target="_blank"
              className="bg-whatsapp-button shadow-[6px_6px_4px_rgba(0,0,0,0.25)] flex gap-[17px] overflow-hidden text-2xl whitespace-nowrap px-[26px] py-4 rounded-2xl max-md:px-5 transition-opacity duration-300 hover:opacity-85 max-md:py-3"
            >
              <img
                loading="lazy"
                src={WhatsAppLogo}
                className="aspect-[1] object-contain w-7 shrink-0"
                alt="Contact Icon"
              />
              <span>Contato</span>
            </Link>
            <div className="text-[32px] grow shrink w-[311px] basis-auto my-auto max-lg:text-[25.6px] max-md:text-xl">
              Telefone (14) 99750-1026
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
