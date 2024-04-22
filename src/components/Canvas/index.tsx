import React, { useState } from "react";
import CommentPin from "../CommentPin";
import "./index.css";

const Canvas = () => {
  const [pinPosition, setPinPosition] = useState({ x: 50, y: 50 });
  const [pinActive, setPinActive] = useState(false);

  const handleContainerClick = (e) => {
    if (!pinActive) {
      const bounds = e.target.getBoundingClientRect();
      const x = ((e.clientX - bounds.left) / bounds.width) * 100;
      const y = ((e.clientY - bounds.top) / bounds.height) * 100;
      setPinPosition({ x, y });
      setPinActive(true);
    }
  };

  return (
    <div className="design-canvas" onClick={handleContainerClick}>
      {pinActive && <CommentPin x={pinPosition.x} y={pinPosition.y} />}
    </div>
  );
};

export default Canvas;
