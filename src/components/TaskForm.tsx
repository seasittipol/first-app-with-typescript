import React, { useState } from "react";

interface TaskFormProp {
  addItem: (name: string) => void;
}

export default function TaskForm({ addItem }: TaskFormProp) {
  const [task, setTask] = useState<string>("");
  const saveData = (e: React.FormEvent) => {
    e.preventDefault();
    setTask("");
    addItem(task);
  };

  return (
    <form onSubmit={saveData}>
      <input
        className="border"
        type="text"
        placeholder="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="bg-blue-300">save</button>
    </form>
  );
}
