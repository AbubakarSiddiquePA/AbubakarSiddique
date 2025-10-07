import React from "react";

export default function Skills() {
  const skills = [
    {
      name: "Flutter & Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Firebase & REST APIs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Provider (State Management)",
      icon: "https://cdn-icons-png.flaticon.com/512/1084/1084230.png", // generic logic icon
    },
    {
      name: "React (Beginner)",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Git & SVN",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <section id="skills" className="skills card">
      <h3>Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
              loading="lazy"
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
