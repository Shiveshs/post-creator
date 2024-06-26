import { Canvas, useFrame, MeshProps } from "@react-three/fiber";
import Box from "./Box";

// Define props interface for your component
interface AppProps {}

// Define state interface if needed
// interface AppState {}

// Define props for the Mesh component
// interface CustomMeshProps extends MeshProps {}

// App component
function App({}: AppProps) {
  return (
    <div className='containerBox'>
      <Canvas>
        <ambientLight intensity={Math.PI / 8} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-2.2, 0, 0]} />
        <Box position={[2.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
