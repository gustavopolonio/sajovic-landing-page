import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-10 bg-[url(/footerBackground.avif)] bg-cover bg-center bg-no-repeat max-md:scroll-mt-[74.61px]"
    >
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="space-y-[22px]">
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src="/whatsapp-white.png"
                alt="Telefone contato Sajovic Sociedade de Advogados"
                className="w-6 h-6"
              />
              <span>(14) 99750-1026</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src="/email-white.png"
                alt="Email contato Sajovic Sociedade de Advogados"
                className="w-6 h-6"
              />
              <span>gabriel_sajovic@hotmail.com</span>
            </div>
            <div className="flex items-start gap-4">
              <img
                loading="lazy"
                src="/pin-white.png"
                alt="Localização Sajovic Sociedade de Advogados"
                className="w-6 h-6 mt-1"
              />
              <div>
                <p>R. Vivaldo Guimarães, 17-30, Jd. Nasralla</p>
                <p>CEP 17012-120 – Bauru/SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                loading="lazy"
                src="/clock-white.png"
                alt="Horário de atendimento Sajovic Sociedade de Advogados"
                className="w-6 h-6"
              />
              <div>
                <p>Horário de atendimento</p>
                <p>Segunda a Sexta: 9h às 17hrs</p>
                <p>Mediante agendamento prévio</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src="/instagram-white.png"
                alt="Instagram Sajovic Sociedade de Advogados"
                className="w-6 h-6"
              />
              <Link to="https://www.instagram.com/adv.sajovic" target="_blank">
                @ ADV.SAJOVIC
              </Link>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.482401072861!2d-49.06851823165583!3d-22.33540692721951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf670c89379cef%3A0x43fe19376694fad5!2sR.%20Vivaldo%20Guimar%C3%A3es%2C%2017-30%20-%20Vila%20Universitaria%2C%20Bauru%20-%20SP%2C%2017015-351!5e0!3m2!1sen!2sbr!4v1739923836360!5m2!1sen!2sbr"
            className="w-[520px] h-[390px] rounded-xl max-lg:w-[400px] max-md:w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}
