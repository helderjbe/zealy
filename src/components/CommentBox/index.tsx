import React, { useState } from "react";
import "./index.css";

interface CommentBoxProps {
  addComment: (text: string) => void;
}

const CommentBox = ({ addComment }: CommentBoxProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
      setText("");
    }
  };

  return (
    <form className="comment-box" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        rows={3}
      ></textarea>
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentBox;
