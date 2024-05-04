import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame, useThree, ThreeElements} from '@react-three/fiber';

const Box = (props: ThreeElements['mesh']) => {
    const meshRef = useRef<THREE.Mesh>(null!);;
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const { clock } = useThree();

    // Rotate the box smoothly
    useFrame(() => {
        const elapsedTime = clock.getElapsedTime();
        meshRef.current.rotation.x = elapsedTime;
        meshRef.current.rotation.y = elapsedTime;
    });

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 2 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} />
        </mesh>
    );
};

export default Box;