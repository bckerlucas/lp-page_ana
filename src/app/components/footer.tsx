import React from "react";
import "../styles/footer.css";
import Image from "next/image";
import Link from "next/link";
import { FaIdCard, FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link
              href="#Section1"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Image
                className="footer-logo"
                src="https://nextjs.org/icons/next.svg"
                alt="logo"
                width={80}
                height={38}
                priority
              />
            </Link>

            <p className="footer-description">
              Profissional qualificada, dedicada a ajudar você a encontrar
              clareza e equilíbrio em sua vida. Agende sua consulta e dê o
              primeiro passo em direção ao seu bem-estar mental.
            </p>
            <ul className="footer-social-icons">
              <li>
                <a href="#" className="footer-social-icon" aria-label="Twitter">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.47 6.77 15.3 0h-1.4L8.85 5.88 4.81 0H.15l6.11 8.9L.15 16h1.38l5.35-6.21L11.14 16h4.67L9.47 6.77Zm-1.9 2.2-.61-.88-4.93-7.05h2.12l3.98 5.69.62.88 5.17 7.4h-2.13L7.58 8.97Z"
                      fill-rule="nonzero"
                      fill-opacity="1"
                      stroke="none"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-social-icon"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-social-icon"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-social-icon"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="28"
                    height="28"
                    viewBox="0 0 30 30"
                    fill="#ffffff"
                  >
                    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Company</p>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Localização</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14469.836271229702!2d-53.47068048465575!3d-24.950491200000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d550e666f639%3A0x8b669c1957bb1b10!2sPsic%C3%B3loga%20Ana%20Paula%20Klein!5e0!3m2!1spt-BR!2sbr!4v1727046224255!5m2!1spt-BR!2sbr"
              width="450"
              height="300"
              style={{ border: 0, borderRadius: "20px", maxWidth: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-copy-flex">
          <div className="footer-copy">
            <FaCopyright style={{ marginRight: "8px" }} /> Copyright 2024, All
            Rights Reserved by Postcraft
          </div>{" "}
          <div className="footer-copy">
            <FaIdCard style={{ margin: "0 8px" }} /> CRP: 08/36243
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
