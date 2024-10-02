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
  isOpen?: boolean;
  children?: React.ReactNode;
}

const DEFAULT_POSITION: Position = { x: 100, y: 100 };
const DEFAULT_SIZE: Size = { width: 300, height: 200 };
const DEFAULT_TITLE = "Canvas Window";

export function CanvasWindow({
  className = "",
  isPortalDisabled = true,
  defaultSize = DEFAULT_SIZE,
  defaultPosition = DEFAULT_POSITION,
  title = DEFAULT_TITLE,
  isOpen = true,
  children = null,
  ...restProps
}: CanvasWindowProps) {
  const [position, setPosition] = useState<Position>(defaultPosition);
  const [size, setSize] = useState<Size>(defaultSize);
  const [isOpened, setIsOpened] = useState<boolean>(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

  const handleCloseWindow = () => {
    setIsOpened(false);
  };

  const convertRemToPixels = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

  const headerHeight = headerRef.current?.clientHeight 
    ? headerRef.current.clientHeight - convertRemToPixels(0.5) 
    : 45;


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
      <div className={styles.dragger_header} ref={headerRef}>
        <h4 className={styles.dragger_title}>{title}</h4>
        <span className={styles.close_icon}>
          <CloseIcon onClick={handleCloseWindow} />
        </span>
      </div>
      <div className={styles.draggable} onMouseDown={startDrag} />
      <div className={styles.resizable} onMouseDown={startResize} />
      <div
        className={styles.dragger_content}
        style={{
          height: `calc(100% - ${headerHeight}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );

  const canvasWindow = isPortalDisabled
    ? ReactDOM.createPortal(modalContent, document.body)
    : modalContent;

  return isOpened ? canvasWindow : null;
}
