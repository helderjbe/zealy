import React, { useState } from "react";
import "./index.css";

interface Comment {
  text: string;
  createdAt: Date;
}

interface CommentBoxProps {
  isTooltipVisible: boolean;
  handleUpdateIcon: (icon: string) => void;
  onClose: () => void;
}

const CommentBox = ({
  isTooltipVisible,
  handleUpdateIcon,
  onClose,
}: CommentBoxProps) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setComment(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments((prev) => [...prev, { text: comment, createdAt: new Date() }]);
    setComment("");
  };

  return (
    <div
      className="tooltip"
      style={{ display: isTooltipVisible ? "block" : "none" }}
    >
      <div className="header">
        <div className="pins">
          {["📍", "😀", "🎃", "🙀", "💀", "😵‍💫"].map((icon) => (
            <span key={icon} onClick={() => handleUpdateIcon(icon)}>
              {icon}{" "}
            </span>
          ))}
        </div>
        <div className="close" onClick={onClose}>
          x
        </div>
      </div>
      <div className="comments">
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-date">
              {comment.createdAt.toLocaleString()}
            </div>
            {comment.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleAddComment}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Aa"
          autoFocus
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentBox;
