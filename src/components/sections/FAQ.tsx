import { Collapse } from '@/components/ui/Collapse'

const faqItems = [
  {
    key: '1',
    label: 'Por quê devo contratar um Advogado Criminalista?',
    children: (
      <>
        <p>
          O Advogado Criminalista é especialista e tem conhecimento técnico e
          prático para melhor analisar cada caso concreto e verificar quais são
          as melhores possibilidades de resolução.
        </p>
        <p>
          Busca além de nulidades e a absolvição, a correta aplicação da pena ao
          final do processo, sem que haja abusos ou violações de direitos
          fundamentais assegurados pela Constituição Federal.
        </p>
      </>
    ),
  },
  {
    key: '2',
    label:
      'Atuação do Advogado em Delegacias. Quais as vantagens de contratá-lo para esse serviço?',
    children: (
      <>
        <p>
          A maioria das pessoas não tem esse conhecimento, mas antes mesmo de se
          iniciar um processo criminal, há uma longa investigação por parte da
          polícia para elaboração de um Inquérito Policial (documento elaborado
          com a finalidade de analisar os boletins de ocorrências feitos, as
          provas coletadas e colher os depoimentos de todos os envolvidos).
        </p>
        <p>
          O Advogado Criminalista é fundamental e indispensável na análise desse
          Inquérito Policial. Já que além de ter acesso a esses documentos de
          forma antecipada, descobre de imediato quais são as possíveis
          acusações, traçando as melhores estratégias que podem beneficiar os
          seus clientes, como: orientações e acompanhamento em seu depoimento,
          pedido de arquivamento, encontrar ilegalidades, fazer a juntada de
          documentos e muito mais.
        </p>
      </>
    ),
  },
  {
    key: '3',
    label:
      'Recebeu intimação por oficial de justiça e descobriu que existe um processo criminal contra você? Fique atento ao prazo e busque imediatamente um Advogado para te auxiliar!',
    children: (
      <>
        <p>
          É muito comum que as pessoas sejam surpreendidas a responderem um
          processo criminal que não sabiam nem da existência. Provavelmente não
          foram localizadas para prestar depoimento na delegacia ou nunca
          ficaram sabendo que alguém teria registrado um Boletim de Ocorrência.
        </p>
        <p>
          Mas fique calmo. Ser chamado para responder um processo não quer dizer
          automaticamente de que você é culpado, muito menos de que você será
          condenado. O processo é longo e demorado e no Brasil ninguém pode
          responder um processo criminal sem estar devidamente representado por
          algum advogado.
        </p>
        <p>
          Por isso, fique atento ao prazo da intimação. Não deixe pra procurar
          um especialista ao fim do prazo. Até porque nós também precisamos de
          tempo para analisar toda a situação, entender todos os acontecimentos
          e construir a melhor tese de defesa possível para seu caso.
        </p>
      </>
    ),
  },
  {
    key: '4',
    label:
      '“Ah, mas eu não tenho dinheiro pra contratar um Advogado particular. Provavelmente só consigo ter atendimento pela Defensoria Pública.” Não é bem assim! Explicamos:',
    children: (
      <>
        <p>
          Os Advogados particulares podem atender uma ampla gama de clientes em
          qualquer horário comercial, enquanto os defensores públicos atendem
          normalmente as pessoas de situação de extrema pobreza e
          vulnerabilidade.
        </p>
        <p>
          Os serviços prestados pelos defensores públicos são gratuitos e podem
          atingir o resultado que você espera. Porém, os Advogados particulares
          podem ter mais tempo para te orientar, traçar a melhor defesa, como
          também informar e tirar suas dúvidas sobre o andamento do processo com
          muito mais rapidez.
        </p>
        <p>
          Por isso, nosso escritório aceita pagamento de forma parcelada, via
          cartão de crédito, débito, dinheiro ou pix. Cada caso será analisado
          conforme o tipo de serviço a ser prestado, se enquadrando da melhor
          maneira para que caiba no bolso do cliente, seguindo como parâmetros
          os preços estipulados na tabela de honorários da OAB.
        </p>
      </>
    ),
  },
  {
    key: '5',
    label: 'Representação em Execução Criminal. Como funciona?',
    children: (
      <p>
        O escritório tem, ainda, uma vasta experiência em militância na área de
        execução criminal, representando o reeducando (preso) dentro do processo
        de sua execução da pena, solicitando a progressão de regime (Semiaberto,
        Aberto, Livramento Condicional), remição de pena (estudo, leitura ou
        trabalho), pedidos de retificação de cálculo, como também indulto,
        comutação de penas e defesa em sindicância.
      </p>
    ),
  },
]

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-16 max-w-[1080px] mx-auto max-lg:py-[51.2px] max-lg:px-4 max-md:scroll-mt-[74.61px]"
    >
      <h2 className="font-serif text-black text-[40px] font-bold text-center mb-8 max-lg:text-[32px] max-lg:mb-[25.6px]">
        Perguntas Frequentes
      </h2>

      {faqItems.map((faqItem) => (
        <Collapse key={faqItem.key} items={[faqItem]} />
      ))}
    </section>
  )
}
