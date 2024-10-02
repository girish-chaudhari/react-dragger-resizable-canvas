import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import CloseIcon from "./CloseIcon";

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

interface CanvasWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  isPortalDisabled?: boolean;
  defaultPosition?: Position;
  defaultSize?: Size;
  title?: string;
}

const DEFAULT_POSITION: Position = { x: 100, y: 100 };
const DEFAULT_SIZE: Size = { width: 300, height: 200 };

export function CanvasWindow({
  className,
  isPortalDisabled = true,
  defaultSize = DEFAULT_SIZE,
  defaultPosition = DEFAULT_POSITION,
  title = "Canvas Window",
  ...restProps
}: CanvasWindowProps) {
  const [position, setPosition] = useState<Position>(defaultPosition);
  const [size, setSize] = useState<Size>(defaultSize);
  const modalRef = useRef<HTMLDivElement>(null);

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    const initialX = e.clientX;
    const initialY = e.clientY;
    const initialPosition = { ...position };

    const handleDrag = (moveEvent: MouseEvent) => {
      const newX = Math.max(
        0,
        Math.min(
          window.innerWidth - size.width,
          initialPosition.x + moveEvent.clientX - initialX
        )
      );
      const newY = Math.max(
        0,
        Math.min(
          window.innerHeight - size.height,
          initialPosition.y + moveEvent.clientY - initialY
        )
      );
      setPosition({ x: newX, y: newY });
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag, { once: true });
  };

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    const initialWidth = size.width;
    const initialHeight = size.height;
    const initialX = e.clientX;
    const initialY = e.clientY;

    const handleResize = (moveEvent: MouseEvent) => {
      const newWidth = Math.max(
        100,
        Math.min(
          window.innerWidth - position.x,
          initialWidth + moveEvent.clientX - initialX
        )
      );
      const newHeight = Math.max(
        100,
        Math.min(
          window.innerHeight - position.y,
          initialHeight + moveEvent.clientY - initialY
        )
      );
      setSize({ width: newWidth, height: newHeight });
    };

    const stopResize = () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResize);
    };

    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize, { once: true });
  };

  const modalContent = (
    <div
      className={`${className} ${styles.canvasWindow}`}
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
      }}
      ref={modalRef}
      {...restProps}
    >
      <div className="dragger_header">
        <h3>{title}</h3>
        <CloseIcon />
      </div>
      <div className={styles.draggable} onMouseDown={startDrag} />
      <div className={styles.resizable} onMouseDown={startResize} />
    </div>
  );

  return isPortalDisabled
    ? ReactDOM.createPortal(modalContent, document.body)
    : modalContent;
}
