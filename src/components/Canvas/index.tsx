import React, { useEffect, useRef, useState } from "react";
import CommentPin from "../CommentPin";
import "./index.css";

interface PinPosition {
  x: number;
  y: number;
}

const Canvas = () => {
  const canvasRef = useRef(null);
  const [openedPin, setOpenedPin] = useState<PinPosition | undefined>();
  const [pinPositions, setPinPositions] = useState<PinPosition[]>([]);

  const handleContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const bounds = e.target.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setPinPositions((prev) => [...prev, { x, y }]);
    setOpenedPin({ x, y });
  };

  useEffect(() => {
    const handleResize = () => {
      // Update pin positions when the window is resized
      pinPositions.forEach((pinPosition) => {
        const bounds = canvasRef.current?.getBoundingClientRect();
        const x = (pinPosition.x / 100) * bounds.width;
        const y = (pinPosition.y / 100) * bounds.height;
        setPinPositions((prev) =>
          prev.map((pin) =>
            pin.x === pinPosition.x && pin.y === pinPosition.y
              ? { x: (x / bounds.width) * 100, y: (y / bounds.height) * 100 }
              : pin
          )
        );
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pinPositions]);

  return (
    <div
      className="design-canvas"
      ref={canvasRef}
      onClick={handleContainerClick}
    >
      {pinPositions.map((pin) => (
        <CommentPin
          x={pin.x}
          y={pin.y}
          isTooltipVisible={pin.x === openedPin?.x && pin.y === openedPin?.y}
          onClick={() =>
            setOpenedPin(
              openedPin && pin.x === openedPin.x && pin.y === openedPin.y
                ? undefined
                : pin
            )
          }
        />
      ))}
    </div>
  );
};

export default Canvas;
