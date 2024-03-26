import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loader';
import Mask from '../Models/Mask';
import Background from '../Components/Background';
import NavBar from '../Components/NavBar';


function Home() {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustMakSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [-2.5, 0.5, -33]; // Adjust the x position here
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43]; // Adjust the x position here as well
    }

    // Calculate scale factor to reduce the mask size
    const scaleFactor = window.innerWidth / 8 / 10; // Adjust divisor based on scene units and desired size

    // Apply scale factor to each dimension
    screenScale = screenScale.map(value => value * scaleFactor);

    return [screenScale, screenPosition, rotation];
  };

  const [isMaskScale, isMaskPosition, isMaskRotation] = adjustMakSize();

  return (
    <>
  
     <div className="flex justify-between bg-zinc-300 overflow-hidden">
     <NavBar />
     <section className='w-full h-screen '>
      {/* <Background /> */}
      
        <Canvas
          className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{ near: 0.1, far: 1000 }} // Adjust camera position
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={2} />
            <directionalLight position={[1, 0, 10]} intensity={10} />
            <spotLight angle={1} intensity={10} />
            <hemisphereLight color="#fffff" intensity={1}></hemisphereLight>

            <Mask position={isMaskPosition} scale={isMaskScale} rotation={isMaskRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} />
          </Suspense>
        </Canvas>
      </section>
     </div>
    
      
    </>
  );
}

export default Home;

