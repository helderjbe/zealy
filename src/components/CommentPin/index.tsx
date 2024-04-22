import React, { useState } from "react";
import "./index.css";

interface CommentPinProps {
  x: number;
  y: number;
}

const CommentPin = ({ x, y }: CommentPinProps) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [comment, setComment] = useState("");

  const toggleTooltip = () => setTooltipVisible(!tooltipVisible);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const position = {
    left: `${x}%`,
    top: `${y}%`,
  };
  return (
    <div className="comment-pin" style={position} onClick={toggleTooltip}>
      📍
      {tooltipVisible && (
        <div className="tooltip">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter comment..."
            autoFocus
          />
        </div>
      )}
    </div>
  );
};

export default CommentPin;
