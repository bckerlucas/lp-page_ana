"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const parallaxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const element = parallaxRef.current;
    const textElement = textRef.current;

    // GSAP Scroll Trigger Animation for Parallax
    gsap.to(element, {
      y: "-40%", // Increase the background movement for a stronger effect
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true, // Smooth parallax effect
        start: "top bottom", // Start when top of element hits bottom of viewport
        end: "bottom top", // End when bottom of element hits top of viewport
      },
    });

    // GSAP Scroll Trigger Animation for Text Blur
    gsap.to(textElement, {
      scrollTrigger: {
        trigger: element,
        scrub: true,
        start: "top center", // Start when the top of the section hits the center of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
      },
    });
  }, []);

  return (
    <section
      ref={parallaxRef}
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: 'url("/images/banner-site-desktop.png")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={textRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          transition: "filter 0.3s ease, opacity 0.3s ease",
        }}
      >
        <h1>Parallax Effect with GSAP</h1>
        <p>This is an example of a parallax effect with blur.</p>
      </div>
    </section>
  );
};

export default ParallaxSection;
