import { useState, useEffect, useRef } from 'react';

const GlowingRingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [ringPositions, setRingPositions] = useState([
    { x: -100, y: -100 }, // outer ring
    { x: -100, y: -100 }, // middle ring
    { x: -100, y: -100 }, // inner ring
  ]);
  
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const animateRings = () => {
      setRingPositions(prev => {
        const newPositions = [...prev];
        
        // Inner ring (smallest) follows mouse directly
        newPositions[0] = {
          x: newPositions[0].x + (mousePosition.x - newPositions[0].x) * 0.15,
          y: newPositions[0].y + (mousePosition.y - newPositions[0].y) * 0.15,
        };
        
        // Middle ring follows inner ring
        newPositions[1] = {
          x: newPositions[1].x + (newPositions[0].x - newPositions[1].x) * 0.12,
          y: newPositions[1].y + (newPositions[0].y - newPositions[1].y) * 0.12,
        };
        
        // Outer ring (largest) follows middle ring
        newPositions[2] = {
          x: newPositions[2].x + (newPositions[1].x - newPositions[2].x) * 0.08,
          y: newPositions[2].y + (newPositions[1].y - newPositions[2].y) * 0.08,
        };
        
        return newPositions;
      });
      
      animationRef.current = requestAnimationFrame(animateRings);
    };

    animationRef.current = requestAnimationFrame(animateRings);
    
    return () => {
      if (typeof animationRef.current === 'number') {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div style={{ cursor: 'none' }}>
      {/* Center point (follows mouse immediately) */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-purple-300"></div>
      </div>

      {/* Inner ring (smallest - follows mouse) */}
      <div
        className="fixed pointer-events-none z-46"
        style={{
          left: ringPositions[0].x - 12,
          top: ringPositions[0].y - 12,
          transform: 'scale(1)',
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-6 h-6 rounded-full border border-[#DA7C25] bg-transparent opacity-80"></div>
      </div>

      {/* Middle ring (follows inner ring) */}
      <div
        className="fixed pointer-events-none z-45"
        style={{
          left: ringPositions[1].x - 20,
          top: ringPositions[1].y - 20,
          transform: 'scale(1)',
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-10 h-10 rounded-full border border-pink-500 bg-transparent opacity-70"></div>
      </div>

      {/* Outer ring (largest - follows middle ring) */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: ringPositions[2].x - 30,
          top: ringPositions[2].y - 30,
          transform: 'scale(1)',
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-15 h-15 rounded-full border-2 border-purple-500 bg-transparent opacity-60"></div>
      </div>  
    </div>
  );
};

export default GlowingRingCursor;