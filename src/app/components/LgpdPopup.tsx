"use client";
import { useState, useEffect } from "react";
import "../styles/lgpdpopup.css";

export default function LgpdPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se estamos no ambiente do cliente (navegador)
    if (typeof window !== "undefined") {
      const lgpdAccepted = localStorage.getItem("lgpdAccepted");
      if (!lgpdAccepted) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lgpdAccepted", "true"); // Salva a aceitação no localStorage
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-lgpd">
      <div className="content">
        <h2>Política de Privacidade</h2>
        <p>
          Utilizamos cookies e outras tecnologias semelhantes para melhorar a
          sua experiência em nosso site. Ao continuar navegando, você concorda
          com a nossa{" "}
          <a
            style={{ color: "var(--text-detail-color)" }}
            href="/privacy-policy"
          >
            política de privacidade
          </a>
          .
        </p>
      </div>
      <button className="button-lgpd" onClick={handleAccept}>
        Aceitar
      </button>
    </div>
  );
}
