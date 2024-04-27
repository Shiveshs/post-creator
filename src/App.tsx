import {useRef, useState} from 'react'
import { Canvas, useFrame, MeshProps } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";
import Box from './Box';

// Define props interface for your component
interface AppProps {}

// Define state interface if needed
interface AppState {}

// Define props for the Mesh component
interface CustomMeshProps extends MeshProps {}

// App component
function App({}: AppProps) {

  return (
    <Canvas>
      <Box position={[-2.2, 0, 0]} />
      <Box position={[8.2, 0.2, 0.2]} />
    </Canvas>
  );
}

export default App;