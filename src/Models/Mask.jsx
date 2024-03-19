import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import robotMask from '../Media/robot_mask.glb';
import { a } from '@react-spring/three';

const Mask = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const robotMaskref = useRef();
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingfactor = 0.95;

    const { nodes, materials } = useGLTF(robotMask);
    const { gl, viewport } = useThree();

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;
            robotMaskref.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }

    };
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
  
        robotMaskref.current.rotation.y += 0.005 * Math.PI;
        rotationSpeed.current = 0.007;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
  
        robotMaskref.current.rotation.y -= 0.005 * Math.PI;
        rotationSpeed.current = -0.007;
      }
    };
  
    // Handle keyup events
    const handleKeyUp = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
      }
    };
    const handleTouchStart = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);
    
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      lastX.current = clientX;
    }
    
    const handleTouchEnd = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    }
    
    const handleTouchMove = (e) => {
      e.stopPropagation();
      e.preventDefault();
    
      if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;
    
        robotMaskref.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    }
    useEffect(() => {
      const canvas = gl.domElement;
      canvas.addEventListener("pointerdown", handlePointerDown);
      canvas.addEventListener("pointerup", handlePointerUp);
      canvas.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      canvas.addEventListener("touchstart", handleTouchStart);
      canvas.addEventListener("touchend", handleTouchEnd);
      canvas.addEventListener("touchmove", handleTouchMove);

        return () => {
          canvas.removeEventListener("pointerdown", handlePointerDown);
          canvas.removeEventListener("pointerup", handlePointerUp);
          canvas.removeEventListener("pointermove", handlePointerMove);
          window.removeEventListener("keydown", handleKeyDown);
          window.removeEventListener("keyup", handleKeyUp);
          canvas.removeEventListener("touchstart", handleTouchStart);
          canvas.removeEventListener("touchend", handleTouchEnd);
          canvas.removeEventListener("touchmove", handleTouchMove);
        };

    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingfactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
        } else {
            const rotation = robotMaskref.current.rotation.y;
            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }

        // Auto-rotation
        // robotMaskref.current.rotation.x += 0.003 * Math.PI;
        robotMaskref.current.rotation.y += 0.002 * Math.PI;
        // robotMaskref.current.rotation.x += 0.002 * Math.PI;
    });

    return (
        <a.group ref={robotMaskref} {...props}>
            <mesh
                geometry={nodes.model_default006_0.geometry}
                material={materials["default.006"]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </a.group>
    );
}

export default Mask;
