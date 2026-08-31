"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-2xl border border-neutral-light bg-[#f4f0e8] p-4">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border bg-[#f4f0e8] p-1.5 transition ${
                selectedImage === index ? "border-accent ring-1 ring-accent" : "border-neutral-light hover:border-foreground/40"
              }`}
            >
              <Image
                src={image}
                alt={`${productName} - Image ${index + 1}`}
                fill
                className="object-contain transition-transform duration-300 hover:scale-105"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
