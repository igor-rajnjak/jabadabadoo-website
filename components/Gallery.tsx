"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galerija" className="py-24 md:py-32 px-6 md:px-8 bg-white">
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-text flex items-center justify-center gap-2 md:gap-3">
          <span className="text-2xl md:text-3xl align-middle">📸</span>
          <span>Galerija Rođendana</span>
          <span className="text-2xl md:text-3xl align-middle">📸</span>
        </h2>
        <p className="text-center text-xl md:text-2xl mb-16 md:mb-20 text-text/80 max-w-3xl mx-auto">
          Pogledajte kako organizujemo nezaboravne rođendane
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={index < 3 ? "eager" : "lazy"}
                quality={90}
                unoptimized={false}
              />
            </div>
          ))}
        </div>
        
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <Image
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
                width={1200}
                height={800}
                className="object-contain rounded-lg"
                quality={95}
                unoptimized={false}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

