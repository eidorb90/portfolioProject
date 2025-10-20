import { useRef } from "react"
import { useFrame } from '@react-three/fiber'

function Box(props: any) {
  const mesh = useRef<any>(null)
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={mesh} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export { Box }; 