import React, { useState } from "react";

export default function TeamMember({ name, role, image }) {
  const [likes, setLikes] = useState(0);

  return (
    <li className="team-member">
      <img src={image} alt={name} className="team-member-img" />
      <strong>{name}</strong>
      <span>{role}</span>
      <button
        className="like-btn"
        onClick={() => setLikes(likes + 1)}
        style={{
          marginTop: "10px",
          background: "#4f8cff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "6px 14px",
          cursor: "pointer"
        }}
      >
        👍 Like {likes > 0 && <span>{likes}</span>}
      </button>
    </li>
  );
}