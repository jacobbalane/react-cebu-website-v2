import React from "react";
import Image from "next/image";

import image1 from "@/assets/images/landing-group-1.jpg";
import image2 from "@/assets/images/landing-group-2.jpg";
import image3 from "@/assets/images/landing-group-3.jpg";
import image4 from "@/assets/images/landing-group-4.jpg";
import image5 from "@/assets/images/landing-group-5.jpg";
import image6 from "@/assets/images/landing-group-6.jpg";

export default function Images() {
  const images = [
    { image: image1, alt: "Event Group Photo 1" },
    { image: image2, alt: "Event Group Photo 2" },
    { image: image3, alt: "Event Group Photo 3" },
    { image: image4, alt: "Event Group Photo 4" },
    { image: image5, alt: "Event Group Photo 5" },
    { image: image6, alt: "Event Group Photo 6" },
  ];
  return (
    <>
      {images.map((image) => (
        <Image
          key={image.alt}
          src={image.image}
          alt={image.alt}
          className="h-40 max-w-28 md:h-full md:max-w-[30rem] rounded-md object-cover"
        />
      ))}
    </>
  );
}
