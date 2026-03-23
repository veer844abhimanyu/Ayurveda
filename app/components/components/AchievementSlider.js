"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AchievementSlider() {
  const images = [
    // "/ach1.jpg",
    // "/ach2.jpg",
    // "/ach3.jpg",
    "/Deepak.jpg",
    "/image1.png",
    "/abhi.jpg",
    "/p2.jpg"

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[250px] md:h-[350px] relative">
      <Image
        src={images[index]}
        alt="achievement"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
}