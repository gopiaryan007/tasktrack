import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to TaskTrack</h1>
      <p>Track your personal tasks with ease.</p>
      <Link to="/tasks">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Go to Tasks
        </button>
      </Link>
    </div>
  );
}