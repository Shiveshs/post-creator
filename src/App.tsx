import {useRef, useState} from 'react'
import { Canvas, useFrame, MeshProps } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

// Define props interface for your component
interface AppProps {}

// Define state interface if needed
interface AppState {}

// Define props for the Mesh component
interface CustomMeshProps extends MeshProps {}

// App component
function App({}: AppProps) {

  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} /> {/* Correct JSX syntax for boxGeometry */}
        <meshStandardMaterial /> {/* Correct JSX syntax for meshStandardMaterial */}
      </mesh>
    </Canvas>
  );
}

export default App;