import {
  Html,
  Environment,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

export default function Laptop() {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="dawn" />
      {/* limit y axis */}
      <PresentationControls global polar={[0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive object={laptop.scene} position-y={[-1, 2]}>
          <Html
            wrapperClass="laptop"
            position={[0, 1.5, -1.5]}
            transform
            distanceFactor={1.16}
            rotation-rotateX={-0.25}
          >
            <iframe src="www.linkedin.com/in/calvinlua"></iframe>
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
}
