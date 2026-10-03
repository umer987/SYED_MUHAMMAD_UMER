import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for non-touch devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animFrame;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const render = () => {
      // Lerp for smooth trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animFrame = requestAnimationFrame(render);
    };

    render();

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Track hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, [isVisible]);

  return (
    <div
      className={`hidden md:block fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Center sharp dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-[#E7CEB0] rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out"
        style={{ willChange: 'transform' }}
      />

      {/* Trailing aura ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none border border-[#79231C] z-40 transition-all duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-[#79231C]/20 border-[#ff2a2a] scale-125 shadow-[0_0_20px_rgba(255,42,42,0.4)]'
            : isClicking
            ? 'w-6 h-6 -ml-3 -mt-3 border-[#E7CEB0] bg-[#E7CEB0]/20'
            : 'w-8 h-8 -ml-4 -mt-4 bg-[#79231C]/10 shadow-[0_0_12px_rgba(121,35,28,0.3)]'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default CustomCursor;
