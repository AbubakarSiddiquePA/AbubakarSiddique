import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function StoriesButton() {
  const navigate = useNavigate();
  const location = useLocation();


  if (location.pathname == "/stories") return null;
  const goToStories = () => {
    navigate("/stories");
  };

  return (
    <button
      className="floating-stories-btn"
      onClick={goToStories}
      aria-label="Go to Stories page"
    >
      📚 Stories
    </button>
  );
}
