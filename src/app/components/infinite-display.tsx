"use client";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carrossel.css";

// Dados dos itens do carrossel
const items = [
  {
    url: "/images/banner-site-mobile.png",
    title: "Imagem 1",
    description: "Descrição 1",
  },
  {
    url: "/images/banner-site-mobile2.png",
    title: "Imagem 2",
    description: "Descrição 2",
  },
  {
    url: "/images/banner-site-mobile3.png",
    title: "Imagem 3",
    description: "Descrição 3",
  },
  {
    url: "/images/banner-site-mobile4.png",
    title: "Imagem 4",
    description: "Descrição 4",
  },
  {
    url: "/images/banner-site-mobile.png",
    title: "Imagem 5",
    description: "Descrição 5",
  },
  {
    url: "/images/banner-site-mobile2.png",
    title: "Imagem 6",
    description: "Descrição 6",
  },
  {
    url: "/images/banner-site-mobile3.png",
    title: "Imagem 7",
    description: "Descrição 7",
  },
  {
    url: "/images/banner-site-mobile4.png",
    title: "Imagem 8",
    description: "Descrição 8",
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

// Componente principal do carrossel
export default function SectionInstagram2() {
  // Configuração do slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Exibe 3 itens ao mesmo tempo
    slidesToScroll: 1,
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
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
