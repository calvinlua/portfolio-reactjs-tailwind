import { Environment, PresentationControls, useGLTF } from "@react-three/drei";

export default function Laptop() {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="dawn" />

      <PresentationControls global polar={[0.4,0.2] polar={[-0.4,0.2]}}>
        <primitive object={laptop.scene} position-y={[-1, 2]} />
      </PresentationControls>
    </>
  );
}
