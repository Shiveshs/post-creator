import "./App.css";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

function App() {
  return (<Canvas>
    <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial/>
    </mesh>
    </Canvas>);
}

export default App;
