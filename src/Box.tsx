import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'


const Box = (props: ThreeElements['mesh']) => {

    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state,delta)=>(meshRef.current.rotation.x += delta))
  return (
    <mesh
    {...props}
    ref={meshRef}
    scale={active ? 2 : 1}
    onClick = {()=> setActive(!active)}
    onPointerOver={()=> setHover(true)}
    onPointerOut={()=> setHover(false)}
    >
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={hovered ? 'green' : 'red'} />
    </mesh>
  )
}

export default Box;