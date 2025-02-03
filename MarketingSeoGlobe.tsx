"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Text, Float } from "@react-three/drei"
import { Vector3, type Group } from "three"
import type * as THREE from "three"

const keywords = ["SEO", "Marketing", "Analytics", "Content", "Social", "PPC", "Branding", "UX", "Mobile"]

function Keyword({ children, ...props }) {
  const color = useMemo(() => new Vector3(Math.random(), Math.random(), Math.random()), [])
  return (
    <Float speed={2} rotationIntensity={5} floatIntensity={20}>
      <Text
        color={color.toArray().map((v) => v * 0.5 + 0.5)}
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        font="/fonts/Inter-Bold.ttf"
        anchorX="center"
        anchorY="middle"
        {...props}
      >
        {children}
      </Text>
    </Float>
  )
}

function Keywords() {
  const ref = useRef<Group>()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02 // Slowed down rotation
    }
  })
  return (
    <group ref={ref}>
      {keywords.map((word, i) => (
        <Keyword
          key={i}
          position={[
            Math.sin((i / keywords.length) * Math.PI * 2) * 3,
            (i - keywords.length / 2) * 0.5,
            Math.cos((i / keywords.length) * Math.PI * 2) * 3,
          ]}
        >
          {word}
        </Keyword>
      ))}
    </group>
  )
}

function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>()
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1 // Slowed down rotation
    }
  })
  return (
    <Sphere args={[1.5, 64, 64]} ref={meshRef}>
      <meshPhongMaterial color="#1E40AF" wireframe />
    </Sphere>
  )
}

export default function MarketingSeoGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingGlobe />
      <Keywords />
    </Canvas>
  )
}

