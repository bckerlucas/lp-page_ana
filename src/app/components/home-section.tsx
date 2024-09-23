"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionHome() {
  const { ref, inView } = useInView({
    triggerOnce: false, // O efeito ocorre toda vez que entra em visão
    threshold: 0.2, // Inicia quando 20% do bloco é visível
    rootMargin: "100px 0px 35px 0px", // Dispara o efeito um pouco antes
    initialInView: true, // Garante que o elemento não inicie transparente
  });

  return (
    <div>
      <div
        id="home"
        className="home-section"
        style={{
          height: "100dvh",
          minHeight: "700px",
          display: "Flex",
          flexDirection: "row",
          flexGrow: "1",
          flexShrink: "1",
          justifyContent: "space-evenly",
          padding: "0 30px",
          margin: "0 auto",
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
          color: "var(--text-color-primary)",
          backgroundColor: "var(--sec-color)",
        }}
      >
        <div style={{ width: "40%", height: "100%" }}> </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            maxWidth: "380px",
            height: "100%",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <h1
            style={{ textAlign: "end", fontSize: "2.6rem", fontWeight: "700" }}
          >
            Psicóloga
            <br />
            Ana P. Klein
          </h1>
          <p
            style={{ textAlign: "end", marginTop: "20px", fontSize: "1.2rem" }}
          >
            Descubra como o cuidado com sua saúde mental pode transformar sua
            vida. Agende sua consulta e dê o primeiro passo para essa mudança.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "200px",
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 100, y: 150 }} // Começa opaco e 100px abaixo
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animação de subir e aumentar opacidade quando visível
          transition={{ duration: 0.6, ease: "easeIn" }} // Controla a duração e o estilo da animação
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "70%",
            height: "220px",
            padding: "30px 0",
            margin: "-100px 0 0 0",
            backgroundColor: "var(--ter-color)",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
            borderRadius: "30px",
            color: "var(--sec-color)",
          }}
        >
          sdfsdfsdfsdf
        </motion.div>
      </div>
      {/*
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Parallax
          bgImage="/images/banner-site-desktop.png"
          strength={500}
          style={{ height: "500px", width: "100%" }}
          bgImageStyle={{
            objectFit: "cover", // Garante que a imagem cubra o contêiner
            objectPosition: "center", // Centraliza a imagem
          }}
        >

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Branco com 50% de opacidade
              zIndex: 1, // Coloca o overlay sobre a imagem de fundo
            }}
          />
          <div
            style={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black", // Cor do texto
              fontSize: "24px",
              fontWeight: "bold",
              position: "relative",
              zIndex: 2, // Conteúdo acima do overlay
            }}
          >
            Conteúdo sobre a imagem de fundo
          </div>
        </Parallax>        
      </div> */}
    </div>
  );
}
