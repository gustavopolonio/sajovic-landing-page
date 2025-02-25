import { Helmet } from 'react-helmet-async'

export const Seo = () => {
  return (
    <Helmet>
      <title>Sajovic - Sociedade de Advogados</title>
      <meta
        name="description"
        content="A sociedade de advocacia Sajovic Sociedade de Advogados, inscrita na Ordem dos Advogados do Brasil, Subseção de São Paulo sob n.º 16288, assiste legalmente, desde o ano de 1984, pessoas físicas e jurídicas, atuando nas mais diversas áreas do Direito, objetivando, principalmente, o oferecimento de serviços de alta qualidade na assessoria jurídica aos seus clientes. Nosso forte sempre foi o Direito de Família e Sucessões - Inventários,  Divórcios, Alimentos, Guarda, Planejamento Sucessório (holdings, testamentos). Atuamos com ênfase também na área contratual. O direito do trabalho veio mais presente em 2020 com a formulação de novo quadro societário. As consultas podem ser presenciais ou agendadas de forma telepresencial - videoconferência."
      />
      <meta
        name="keywords"
        content="Sajovic,Sociedade de Advogados,Administrativo,Consumeirista,Direito Bancário e Operações Financeiras,Direito civil,Contratual e Imobiliário,Direito Societário,Extrajudicial,Família e Sucessões,Trabalhista,Advocacia Criminal Especializada,Audiência de custódia,Habeas corpus,Violência doméstica,Assistente de acusação,Advogados,Gabriel Sajovic"
      />
      <meta
        name="author"
        content="Gustavo Polonio - https://www.linkedin.com/in/gustavo-polonio"
      />

      <meta property="og:title" content="Sajovic - Sociedade de Advogados" />
      <meta
        property="og:description"
        content="Sajovic,Sociedade de Advogados,Administrativo,Consumeirista,Direito Bancário e Operações Financeiras,Direito civil,Contratual e Imobiliário,Direito Societário,Extrajudicial,Família e Sucessões,Trabalhista,Advocacia Criminal Especializada,Audiência de custódia,Habeas corpus,Violência doméstica,Assistente de acusação,Advogados,Gabriel Sajovic"
      />
      <meta
        property="og:url"
        content="https://www.advocaciacriminalsajovic.com.br/"
      />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
