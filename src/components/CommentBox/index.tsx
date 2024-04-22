import React, { useState } from "react";
import "./index.css";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    setComments((prev) => [...prev, comment]);
    setComment("");
  };

  return (
    <div className="tooltip">
      {comments.map((comment, index) => (
        <div key={index}>{comment}</div>
      ))}
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Aa"
        autoFocus
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentBox;
