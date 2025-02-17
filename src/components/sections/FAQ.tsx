import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é direito criminal?",
    answer:
      "O Direito Criminal é uma área do direito que lida com crimes, suas definições, penalidades e o processo judicial relacionado a acusações criminais.",
  },
  {
    question: "Quais são os tipos de crimes mais comuns?",
    answer:
      "Crimes podem ser classificados em diversas categorias, incluindo crimes contra a pessoa (como homicídio), crimes contra a propriedade (como roubo), crimes contra a ordem pública (como perturbação da ordem) e crimes contra o Estado (como traição).",
  },
  {
    question: "Qual é o papel de um advogado criminal?",
    answer:
      "O advogado criminal é responsável pela defesa dos direitos e interesses de pessoas acusadas de crimes, garantindo um processo justo e o devido processo legal.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16">
      <h2 className="text-black text-[40px] font-bold text-center mb-10">
        Perguntas Frequentes
      </h2>
      <div className="max-w-[1080px] mx-auto px-4">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-2xl font-bold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl leading-7">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
