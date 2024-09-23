import React, { useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ícones de mais e menos
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti"; // Dentro do seu componente
const perguntas = [
  {
    pergunta: "Como funciona a Psicoterapia?",
    resposta: "A psicoterapia funciona por meio de conversas...",
  },
  {
    pergunta: "Como são feitas as sessões online?",
    resposta: "As sessões online são realizadas por vídeo chamada...",
  },
  {
    pergunta: "Posso fazer a psicoterapia da minha própria casa?",
    resposta: "Sim, você pode realizar as sessões de psicoterapia...",
  },
  {
    pergunta: "Quanto tempo dura o processo de Psicoterapia?",
    resposta: "O tempo de duração varia de acordo com as necessidades...",
  },
  {
    pergunta: "Qual o valor da sessão?",
    resposta:
      "O valor da sessão varia dependendo da abordagem e do terapeuta...",
  },
  {
    pergunta: "Atende por plano de saúde?",
    resposta:
      "Muitos dos meus pacientes possuem planos de saúde, mas optam pelo <strong>atendimento particular via reembolso.</strong><br /><br />" +
      "Nessa opção, você paga pela sessão e, em seguida, solicita o reembolso ao seu plano de saúde com a nota fiscal que eu emito.<br />" +
      "<strong>Você tem o direito de escolher o profissional que deseja atender!</strong><br /><br />" +
      "Para saber qual é o valor que seu convênio reembolsa por consulta com um psicólogo, entre em contato com a central de atendimento do seu plano.",
  },
];

const SectionPerguntas: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answerRefs = useRef<HTMLDivElement[]>([]); // Referências para calcular a altura

  const togglePergunta = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="duvidas">
      <div
        className="text-description-faq"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: "20px",
          alignItems: "center",
          width: "100%",
          maxWidth: "470px",
        }}
      >
        <h2 className="faq-title">Dúvidas Frequentes</h2>
        <p style={{}}>
          Aqui estão as respostas para as perguntas mais comuns sobre o processo
          de psicoterapia. Se tiver outras dúvidas, sinta-se à vontade para
          entrar em contato.
        </p>
        <a
          style={{
            width: "150px",
            color: "var(--sec-color)",
            backgroundColor: "var(--ter-color)",
          }}
          href="https://wa.me/5545998186214?text=Olá,%20Ana!%0AVi%20a%20sua%20página%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20que%20você%20oferece.%0APoderia%20me%20fornecer%20mais%20informações?%0AObrigado!"
          className="botao-agendar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="botao-agendar-content">
            <FaWhatsapp
              style={{
                marginRight: "8px",
                width: "25px",
                height: "25px",
              }}
            />{" "}
            Agendar{" "}
          </span>
        </a>
      </div>

      <div className="faq-list">
        {perguntas.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => togglePergunta(index)}>
              <h3>{item.pergunta}</h3>
              <span className="icon transition">
                {activeIndex === index ? (
                  <TiArrowSortedUp size={35} />
                ) : (
                  <TiArrowSortedDown size={35} />
                )}
              </span>
            </div>
            <div
              ref={(el) => {
                if (el) {
                  answerRefs.current[index] = el;
                }
              }}
              className={`faq-answer-wrapper ${
                activeIndex === index ? "active" : ""
              }`}
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${answerRefs.current[index]?.scrollHeight}px`
                    : "0px",
              }}
            >
              <div
                className="faq-answer"
                dangerouslySetInnerHTML={{ __html: item.resposta }} // Usando dangerouslySetInnerHTML aqui
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-section {
          margin: 0 auto;
          padding: 2rem;
          justify-content: space-evenly;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .faq-title {
          font-size: 1.6rem;
          color: var(--ter-color); /* Ajuste a cor do título aqui */
          text-align: center;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background-color: #f9f9f9;
          max-width: 600px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 1rem;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .faq-question h3 {
          font-size: 1.2rem;
          color: var(--ter-color);
          padding-right: 20px;
        }
        .icon {
          font-size: 1.5rem;
          color: var(--ter-color);
          transition: transform 0.3s ease;
        }
        .faq-answer-wrapper {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.5s ease;
        }
        .faq-answer-wrapper.active {
          opacity: 1;
        }
        .faq-answer {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: var(--text-color-primary);
        }
        .text-description-faq {
          max-width: 40%;
        }

        @media screen and (max-width: 600px) {
          .faq-section {
            flex-wrap: wrap;
            gap: 20px;
            max-width: 100%;
            width: 100%;
          }
          .text-description-faq {
            max-width: 100%;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionPerguntas;
