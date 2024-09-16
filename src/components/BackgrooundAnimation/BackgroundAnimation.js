import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'; // Required by Vanta
import FOG from 'vanta/dist/vanta.fog.min'; // Import Vanta.fog

const BackgroundAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(null); // State to hold the Vanta effect
  const backgroundRef = useRef(null); // Reference to the background div

  useEffect(() => {
    if (backgroundRef.current && !vantaEffect) {
      setVantaEffect(
        FOG({
          el: backgroundRef.current,
          THREE,
          highlightColor: 0x0,
          midtoneColor: 0xff0000,
          lowlightColor: 0x0,
        baseColor: 0x50404,
          zoom: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimation;
