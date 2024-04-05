import { useState } from "react";
import TaskList from "./components/TaskList";
import item from "./models/item";
import TaskForm from "./components/TaskForm";

function App() {
  const [items, setItems] = useState<item[]>([]);

  const generateID = () => {
    const id = Date.now();
    return id;
  };
  const addItem = (name: string) => {
    setItems([...items, { id: generateID(), name: name }]);
  };
  return (
    <>
      <TaskForm addItem={addItem} />
      <TaskList items={items} />
    </>
  );
}

export default App;
