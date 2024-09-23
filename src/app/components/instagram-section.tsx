"use client";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Instagram-carrossel.css";
import Image from "next/image";

// Dados dos itens do carrossel
const items = [
  {
    url: "/images/instagram5.jpg",
    title: "Qual o meu propósito aqui?",
    url2: "https://www.instagram.com/p/CyzW6WToQuV/",
  },
  {
    url: "/images/instagram1.jpg",
    title: "Quem é ANA PAULA KLEIN",
    url2: "https://www.instagram.com/p/CxJV_hKxgDR/",
  },
  {
    url: "/images/instagram2.jpg",
    title: "Mentiras que te contam sobre a Psicoterapia",
    url2: "https://www.instagram.com/p/C_0Pl0mxD3o/",
  },
  {
    url: "/images/instagram3.jpg",
    title: "Eu tive medo de entrar em outro relacionamento...",
    url2: "https://www.instagram.com/p/C-n4V10xXQ8/",
  },
  {
    url: "/images/instagram4.jpg",
    title: "Comunicação Assertiva: faz diferença no meu relacionamento?",
    url2: "https://www.instagram.com/p/C_RE2xERvJB/",
  },
  {
    url: "/images/instagram6.jpg",
    title: "Frase de Carl Rogers",
    url2: "https://www.instagram.com/p/CwZ9pgZAwmi/",
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button className="arrow-left" onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
};

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button className="arrow-right" onClick={onClick}>
      <FaArrowRight />
    </button>
  );
};

export default function SectionInstagram() {
  // Configuração do slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true, // Permite arrastar as imagens
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="instagram" className="carousel-container">
      <div className="carousel-text">
        <div className="carousel-title">
          Já conhece meu perfil no Instagram?
        </div>
        <div className="carousel-description">
          Siga @psianaklein e fique por dentro das novidades.
        </div>
      </div>

      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <a target="_blank" href={item.url2} rel="noopener noreferrer">
              <Image
                src={item.url}
                alt={item.title}
                width={500} // Defina a largura desejada
                height={300} // Defina a altura desejada
              />
              <h3>{item.title}</h3>
              {/* <p>{item.description}</p> */}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
