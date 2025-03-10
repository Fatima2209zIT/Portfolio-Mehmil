"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

const GalaxyBackground = () => {
  const starsRef = useRef<Group>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005; // Smooth rotation
      starsRef.current.rotation.x += 0.0008;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={10000}
        factor={4}
        fade
      />
    </group>
  );
};

const Contact3D = () => {
  return (
    <section className="relative w-full h-screen bg-black" id="contact">
      {/* Galaxy Stars with rotation */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={1} />
        <GalaxyBackground />
      </Canvas>

      {/* Contact Form */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form
          action="mailto:mehmilzeeshan125@gmail.com"
          method="POST"
          encType="text/plain"
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-3xl w-[90%] md:w-[500px] space-y-6 shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-white text-center">
            Get in Touch with Mehmil Zeeshan
          </h1>
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none"
            required
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/80"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact3D;
