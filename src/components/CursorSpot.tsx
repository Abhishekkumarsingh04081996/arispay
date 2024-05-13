import { ElementRef, ReactNode, useRef } from "react";
import "./cursor.css";

interface IProps {
  children: ReactNode;
}

export function CurosrSpot({ children }: IProps) {
  const ref = useRef<ElementRef<"div">>(null);

  function handleMouseMove(event: React.MouseEvent<ElementRef<"div">>) {
    if (!ref.current) return;
    const { x, y } = event.currentTarget.getBoundingClientRect();

    ref.current.style.setProperty("--x", String(event.clientX - x));
    ref.current.style.setProperty("--y", String(event.clientY - y));
  }

  return (
    <div ref={ref} className="cursor-spot" onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
