import React, { useContext, useRef, useState } from "react";
import { TaskContext } from "../TaskContext";
import TaskItem from "../components/TaskItem";

export default function TasksPage() {
  const { tasks, addTask, toggleTask } = useContext(TaskContext);
  const titleRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
    titleRef.current.focus();
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Tasks</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
        <input
          ref={titleRef}
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginRight: "1rem", padding: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="Task description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: "1rem", padding: "0.5rem" }}
        />
        <button type="submit" disabled={!title.trim()}>
          Add Task
        </button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet! Add one to get started.</p>
      ) : (
        <>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
          ))}
          <p style={{ marginTop: "1rem" }}>
            ✅ {completedCount} of {tasks.length} tasks completed
          </p>
        </>
      )}
    </div>
  );
}