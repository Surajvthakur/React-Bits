import React from 'react';
// 1. Fix import path (../) and rename the component to avoid conflict
import FluidGlassComponent from '../components/FluidGlass';

// 2. Rename your PAGE component
const FluidGlassPage = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      {/* 3. Use the renamed component you imported */}
      <FluidGlassComponent 
        mode="cube" // or "bar", "cube"
        lensProps={{
          scale: 0.55,
          ior: 1.55,
          thickness: 5,
          chromaticAberration: 0.1,
          anisotropy: 0.01  
        }}
        barProps={{}} // add specific props if using bar mode
        cubeProps={{}} // add specific props if using cube mode
      />
    </div>
  );
}

// 4. Export the PAGE component
export default FluidGlassPage;
