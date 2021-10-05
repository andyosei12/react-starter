import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import styles from "./styles/Header.module.css";
function App() {
  const [task, setTask] = useState([]);

  const addTaskHandler = (task) => {
    const updatedTask = {
      id: Math.random(),
      title: task,
    };
    setTask((prevTask) => [updatedTask, ...prevTask]);
  };

  const deleteTaskHandler = (id) => {
    const filteredTask = task.filter((task) => task.id !== id);
    setTask(filteredTask);
  };

  return (
    <div>
      <h1 className={styles.header}>Todo tasks</h1>
      <TaskForm onAddTask={addTaskHandler} />
      <Task onDeleteTask={deleteTaskHandler} taskItems={task} />
      {task.length <= 0 && <p>No task found</p>}
    </div>
  );
}

export default App;
