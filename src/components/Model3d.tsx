import { useGLTF } from "@react-three/drei";

const Model3D = () => {
  const model = useGLTF("/model.glb"); // path dari public/models

  return <primitive object={model.scene} scale={5} />;
};

export default Model3D;
