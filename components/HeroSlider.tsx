"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSliderProps {
  images: readonly string[];
}

export function HeroSlider({ images }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`AMID Internación Domiciliaria ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <span className="inline-block px-4 py-1.5 bg-amid-blue/90 text-white text-xs font-semibold uppercase tracking-wider rounded">
          AMID - Internación Domiciliaria
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight max-w-2xl">
          BIENESTAR EN TU CASA
        </h1>
        <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
          En lugar de pasar tiempo en un hospital o centro de salud, podés recuperarte en la
          comodidad de tu casa, rodeado de tus seres queridos y en un ambiente familiar. Porque el
          mejor lugar para sanar es tu hogar, confiá en nosotros.
        </p>
        <Link
          href="#contacto"
          className="mt-8 inline-block px-8 py-3.5 bg-amid-blue text-white font-semibold uppercase text-sm tracking-wide rounded hover:bg-amid-navy-light transition-colors"
        >
          Contactanos
        </Link>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
