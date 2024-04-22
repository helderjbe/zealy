import "./index.css";
import CommentBox from "../CommentBox";

interface CommentPinProps {
  x: number;
  y: number;
  isTooltipVisible: boolean;
  onClick: () => void;
}

const CommentPin = ({ x, y, isTooltipVisible, onClick }: CommentPinProps) => {
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
        📍
      </div>
      {isTooltipVisible && <CommentBox />}
    </div>
  );
};

export default CommentPin;
