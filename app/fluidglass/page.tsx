"use client";
import FluidGlass from '../components/FluidGlass';
import Link from 'next/link';

export default function FluidGlassPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <FluidGlass 
        mode="cube"
        lensProps={{
          scale: 0.55,
          ior: 1.55,
          thickness: 5,
          chromaticAberration: 0.1,
          anisotropy: 0.01  
        }}
      />
      <Link href="/">
        <button style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          fontSize: '1rem',
          color: 'white',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '2px solid white',
          borderRadius: '50px',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          zIndex: 1000
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}
