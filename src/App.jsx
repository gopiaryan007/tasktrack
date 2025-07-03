import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TasksPage from "./pages/TasksPage";
import AboutPage from "./pages/AboutPage";
import { TaskProvider } from "./TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <Router>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", textAlign: "center" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/tasks" style={{ marginRight: "1rem" }}>Tasks</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}