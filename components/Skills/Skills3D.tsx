"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { skills } from "../../data";
import { TextureLoader, Group } from "three";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";

const SkillLogo = ({
  icon,
  position,
}: {
  icon: string;
  position: [number, number, number];
}) => {
  const texture = useLoader(TextureLoader, icon);

  return (
    <mesh position={position}>
      <planeGeometry args={[2.5, 2.5]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const Galaxy = () => {
  const starsRef = useRef<Group>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.00; 
      starsRef.current.rotation.x += 0.002;
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

const Skills3D = () => {
  return (
    <section className="w-full h-screen" id="skills">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <ambientLight intensity={1} />
        <Galaxy />

        {/* Fixed logos */}
        {skills.map((skill, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;
          const x = (col - 1.5) * 5;
          const y = (1 - row) * 5;
          const z = 0;

          return (
            <SkillLogo
              key={skill.id}
              icon={skill.icon}
              position={[x, y, z]}
            />
          );
        })}
      </Canvas>
    </section>
  );
};

export default Skills3D;

