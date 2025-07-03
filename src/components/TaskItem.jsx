import React from "react";

export default function TaskItem({ task, toggleTask }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        style={{ marginRight: "0.5rem" }}
      />
      <strong style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </strong>
      {task.description && (
        <span style={{ marginLeft: "0.5rem", fontStyle: "italic" }}>
          — {task.description}
        </span>
      )}
    </div>
  );
}