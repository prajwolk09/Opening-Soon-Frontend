"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEmailClick = () => {
    const email = "test@test.com";
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank"
      );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden animate-background">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${30 + mousePosition.y * 0.1}%`,
          }}
        />
        <div
          className="absolute w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.05}%`,
            top: `${20 + mousePosition.y * 0.08}%`,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-40 h-40 bg-secondary/15 rounded-full blur-xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.03}%`,
            bottom: `${25 + mousePosition.y * 0.06}%`,
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="absolute top-10 left-10 w-16 h-16 border-2 border-accent/30 rounded-full animate-rotate-slow" />
      <div
        className="absolute bottom-20 right-20 w-12 h-12 border-2 border-primary/30 rounded-full animate-rotate-slow"
        style={{ animationDirection: "reverse" }}
      />

      <div
        className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 cursor-follow ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      >
        {/* Logo */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center animate-pulse-glow">
            <Image
              src="/logo.jpg"
              alt="Thelamandu Logo"
              width={120}
              height={120}
              className="rounded-full"
              priority
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance drop-shadow-lg">
          Thelamandu
        </h1>

        {/* Tagline */}
        <p className="font-sans text-xl md:text-2xl text-foreground/80 mb-8 text-balance">
          Authentic. Discovered. Delicious.
        </p>

        {/* Opening Soon Badge */}
        {/* Grand Opening Hero Section */}
        <div className="relative mb-16 px-6 py-16 text-center overflow-hidden rounded-3xl border border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-lg">
          {/* Floating Decorative Circles */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute top-1/3 right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" />

          {/* Pulsing Glow Border */}
          <div className="absolute inset-0 rounded-3xl border border-dashed border-accent/30 animate-pulse pointer-events-none" />

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-serif font-extrabold text-foreground tracking-tight drop-shadow-md z-10 relative animate-fade-in-up">
            🎉 Opening Soon!
          </h2>
        </div>

        {/* Main Message */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          Bringing the Flavors of Nepal to You Soon!
        </h2>

        {/* Description */}
        <p className="font-sans text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Experience the authentic taste of Nepals's bustling streets. From
          steaming momos to spicy chatpate, we're preparing to bring you the
          most beloved flavors of Nepal.
        </p>
        {/* 

        {/* Cultural Elements */}
        <div className="flex justify-center items-center space-x-8 text-accent animate-float">
          <div className="text-4xl">🏔️</div>
          <div className="text-4xl">🥟</div>
          <div className="text-4xl">🌶️</div>
          <div className="text-4xl">🍜</div>
        </div>
      </div>
    </section>
  );
}
