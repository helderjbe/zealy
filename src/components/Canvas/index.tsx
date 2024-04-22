import React, { useState } from "react";
import CommentPin from "../CommentPin";
import "./index.css";

interface PinPosition {
  x: number;
  y: number;
}

const Canvas = () => {
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

  return (
    <div className="design-canvas" onClick={handleContainerClick}>
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
