"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Secao1() {
  const [isMobile, setIsMobile] = useState(false);

  // Função para verificar se a largura da tela é menor que 600px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Chama a função ao montar o componente e ao redimensionar a janela
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="Section1"
      style={{
        position: "static",
        width: "100%",
        maxHeight: "600px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center", // Alinha horizontalmente ao centro
        alignItems: "center", // Alinha verticalmente ao centro
      }}
    >
      <Image
        src={
          isMobile
            ? "/images/banner-site-mobile.png"
            : "/images/banner-site-desktop.png"
        } // Alterna entre a imagem mobile e desktop
        alt="Descrição da Imagem"
        width={1920} // Largura da imagem
        height={900} // Altura da imagem
        style={{ width: "100%", height: "auto" }}
        priority // Adiciona a prioridade ao carregamento da imagem
      />
    </div>
  );
}
