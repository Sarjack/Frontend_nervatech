import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.2 })
  )

  const cleanedSphere = sphere.filter(
    (value) => !isNaN(value) && isFinite(value)
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI]}>
      <Points
        ref={ref}
        positions={cleanedSphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#2c3792"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="stars">
      {/* <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas> */}
    </div>
  )
}

export default StarsCanvas
