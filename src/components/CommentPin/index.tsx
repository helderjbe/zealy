import "./index.css";
import CommentBox from "../CommentBox";
import { useState } from "react";

interface CommentPinProps {
  x: number;
  y: number;
  isTooltipVisible: boolean;
  onClick: () => void;
}

const CommentPin = ({ x, y, isTooltipVisible, onClick }: CommentPinProps) => {
  const [icon, setIcon] = useState("📍");

  const handleUpdateIcon = (icon: string) => {
    setIcon(icon);
  };

  const position = {
    left: `${x}%`,
    top: `${y}%`,
  };
  return (
    <div
      className="comment-pin"
      style={position}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="pin" onClick={onClick}>
        {icon}
      </div>
      <CommentBox
        isTooltipVisible={isTooltipVisible}
        handleUpdateIcon={handleUpdateIcon}
        onClose={onClick}
      />
    </div>
  );
};

export default CommentPin;
