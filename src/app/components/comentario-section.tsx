"use client";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/comment-carrossel.css";

const comments = [
  {
    name: "J.S.",
    comment: "O atendimento foi excepcional! A psicóloga é muito atenciosa.",
  },
  {
    name: "M.O.",
    comment:
      "Senti-me acolhida desde o primeiro momento. A qualidade do atendimento é incrível!",
  },
  {
    name: "P.S.",
    comment:
      "A profissional é muito competente e me ajudou a entender melhor meus sentimentos.",
  },
  {
    name: "A.C.",
    comment:
      "O ambiente é tranquilo e acolhedor. Com certeza voltarei para mais sessões.",
  },
  {
    name: "L.A.",
    comment:
      "Excelente experiência! A psicóloga é muito profissional e empática.",
  },
  {
    name: "F.L.",
    comment:
      "A abordagem dela superou minhas expectativas. Estou muito satisfeita com o progresso.",
  },
  {
    name: "C.P.",
    comment:
      "Recomendo a todos! O local é confortável e a psicóloga é realmente dedicada.",
  },
  {
    name: "J.R.",
    comment:
      "A experiência foi transformadora. Senti que realmente me escutaram e ajudaram.",
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

export default function SectionComment() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
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
    <div id="comments" className="comment-carousel-container">
      <div className="comment-carousel-text">
        <div className="comment-carousel-title">Conheça meu trabalho</div>
        <div className="comment-carousel-description">
          Veja o feedback dos meus clientes e descubra como posso ajudar você a
          alcançar seu bem-estar emocional e psicológico.
        </div>
      </div>

      <Slider {...settings}>
        {comments.map((item, index) => (
          <div key={index} className="comment-carousel-item">
            <h3>{item.name}</h3>
            <p>{item.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
