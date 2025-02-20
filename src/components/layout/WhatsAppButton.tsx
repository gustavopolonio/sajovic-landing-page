import { Link } from 'react-router-dom'
import WhatsAppLogo from '/whatsapp.png'

export const WhatsAppButton = () => {
  return (
    <Link
      to="https://wa.me/+5514997501026"
      target="_blank"
      className="fixed group bottom-5 right-5 flex items-center z-10"
    >
      <span className="shadow-[0px_6px_4px_rgba(0,0,0,0.25)] bg-whatsapp-button py-2 pl-3 pr-7 -mr-5 rounded-xl text-white text-lg font-bold leading-[22px] text-center uppercase max-lg:group-hover:hidden max-xl:hidden max-xl:group-hover:block">
        Fale conosco <br /> no WhatsApp
      </span>
      <img
        loading="lazy"
        src={WhatsAppLogo}
        className="aspect-[1] object-contain w-[70px] shrink-0 max-md:w-12"
        alt="Ícone whatsapp Sajovic Sociedade de Advogados"
      />
    </Link>
  )
}
