import React, { useState } from "react";

export default function TeamMember({ name, role, image }) {
  const [likes, setLikes] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `${name} — ${role}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <li className="team-member">
      <img src={image} alt={name} className="team-member-img" />
      <strong>{name}</strong>
      <span>{role}</span>
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button
          className="like-btn"
          onClick={() => setLikes(likes + 1)}
          style={{
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

        <button
          className="copy-btn"
          onClick={handleCopy}
          style={{
            background: "#0ea5e9",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "6px 14px",
            cursor: "pointer"
          }}
          title="Copy name and role"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>
    </li>
  );
}