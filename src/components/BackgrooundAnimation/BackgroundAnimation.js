import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const BackgroundAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const backgroundRef = useRef(null);

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
