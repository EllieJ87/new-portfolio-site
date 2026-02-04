'use client';
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState( { x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    // track cursor
    window.addEventListener('mousemove', moveCursor);

    // setect hoverable element
    const hoverables = document.querySelectorAll('a, button, .hover-target');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'hovered' : '' }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}