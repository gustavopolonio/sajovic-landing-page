export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/352de713cf3d99889360736d794fab38c79466dcffc27084bda50701a35efc82"
                alt="Phone"
                className="w-6 h-6"
              />
              <span>(14) 99750-1026</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/3c91284fd250ac43c538511c65cece3a511ffb2e77d351208aa69e072adf29e7"
                alt="Email"
                className="w-6 h-6"
              />
              <span>gabriel_sajovic@hotmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/fadae5f8af023c3daac3a21d225f4d91889c311d33871135ca8ee0ca664a317e"
                alt="Location"
                className="w-6 h-6 mt-1"
              />
              <div>
                <p>R. Vivaldo Guimarães, 17-30, Jd. Nasralla</p>
                <p>CEP 17012-120 – Bauru/SP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/ce2a095a59b16b3a2668ba992e584b6441ee3cc4356ba26fece9739093204fb2"
                alt="Hours"
                className="w-6 h-6"
              />
              <div>
                <p>Horário de atendimento</p>
                <p>Segunda a Sexta: 9h às 17hrs</p>
                <p>Mediante Agendamento prévio</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/00f014b46435cc0bfeafeab765cf1cb44b286dce258de297c3b53b0627cd9dab"
                alt="Social"
                className="w-6 h-6"
              />
              <span>@ ADV.SAJOVIC</span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4dd7709355144ddb9dd788327b04a8c8/f3a66cd9964de8fd019648d6a90b328ce3045f0d12da6ffe2c1a020f18433233"
            alt="Office Map"
            className="aspect-[1.32] object-contain w-full md:w-1/2 rounded-xl"
          />
        </div>
        <div className="text-center mt-8 text-sm">
          <p>
            Sajovic Sociedade de Advogados – Todos os direitos reservados |
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/gustavo-polonio/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gustavo Polonio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
