"use client"

import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Text } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ElementModelProps {
  element: {
    name: string
    symbol: string
    number: number
    electron_configuration: string
  }
}

function AtomModel({ element }: ElementModelProps) {
  const groupRef = useRef()

  // Parse electron configuration to determine shells
  const electronConfig = element.electron_configuration
  const shells = []

  // This is a simplified parsing of electron configuration
  // In a real app, you would have a more sophisticated parser
  const configParts = electronConfig.split(" ")
  configParts.forEach((part) => {
    const match = part.match(/(\d)([spdf])(\d+)/)
    if (match) {
      const shell = Number.parseInt(match[1])
      const subshell = match[2]
      const electrons = Number.parseInt(match[3])

      while (shells.length < shell) {
        shells.push(0)
      }
      shells[shell - 1] += electrons
    }
  })

  return (
    <group ref={groupRef}>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ff4500" />
      </mesh>

      {/* Electron shells */}
      {shells.map((electronCount, i) => {
        const radius = 1 + i * 0.8

        return (
          <group key={i}>
            {/* Shell orbit */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[radius, 0.02, 16, 100]} />
              <meshStandardMaterial color="#888888" transparent opacity={0.5} />
            </mesh>

            {/* Electrons */}
            {Array.from({ length: electronCount }).map((_, j) => {
              const angle = (j / electronCount) * Math.PI * 2
              const x = Math.cos(angle) * radius
              const z = Math.sin(angle) * radius

              return (
                <mesh key={j} position={[x, 0, z]}>
                  <sphereGeometry args={[0.1, 16, 16]} />
                  <meshStandardMaterial color="#3498db" />
                </mesh>
              )
            })}
          </group>
        )
      })}

      {/* Element symbol */}
      <Text position={[0, -1.5, 0]} fontSize={0.5} color="#ffffff" anchorX="center" anchorY="middle">
        {element.symbol}
      </Text>
    </group>
  )
}

export default function ElementModel({ element }: ElementModelProps) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>3D Electron Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <Suspense fallback={<div>Loading 3D model...</div>}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <AtomModel element={element} />
              <OrbitControls enableZoom={true} />
              <Environment preset="city" />
            </Canvas>
          </Suspense>
        </div>
      </CardContent>
    </Card>
  )
}
