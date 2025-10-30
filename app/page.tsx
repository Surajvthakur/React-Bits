"use client";
import Laser from "./components/Laser";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Laser
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10 
        }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '2rem' }}>Laser Effect</h1>
          <Link href="/fluidglass">
            <button style={{
              padding: '15px 30px',
              fontSize: '1.2rem',
              color: 'white',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid white',
              borderRadius: '50px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              View FluidGlass Demo
            </button>
          </Link>
        </div>
      </div>
      
    </>
  );
}
