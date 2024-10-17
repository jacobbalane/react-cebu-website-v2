"use client"; // This file is client-side only

// Import the useEffect hook from React
import { useEffect } from "react";

// Import the AOS library
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-sine",
      offset: 300,
      once: true,
    });
  }, []);

  return null;
}
