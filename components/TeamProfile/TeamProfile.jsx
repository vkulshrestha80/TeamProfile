import React from "react";
import "./TeamProfile.css";
import teamMembers from "../../data/teamMembers.json";
import TeamMember from "../TeamMember/TeamMember";

export default function TeamProfile() {
  return (
    <div className="team-profile-container">
      <h1 className="team-profile-title">Team Profile</h1>
      <ul className="team-list">
        {teamMembers.map((member, idx) => (
          <TeamMember
            key={idx}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </ul>
    </div>
  );
}
