import React from "react";

export const CommentDetail = ({ name, timeAgo, comment, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>

      <div className="content">
        <a href="/" className="author">
          {name}
        </a>

        <div className="metadata">
          <span className="date">Today at {timeAgo}</span>
        </div>

        <div className="text">{comment}</div>
      </div>
    </div>
  );
};
