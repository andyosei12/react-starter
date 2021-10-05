import { useState } from "react";
import styles from "../styles/TaskForm.module.css";
const TaskForm = (props) => {
  const [userInput, setUserInput] = useState("");
  const formInputHandler = (event) => {
    setUserInput(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onAddTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <input
        onChange={formInputHandler}
        className={styles["form__input"]}
        type="text"
        placeholder="Enter task"
        value={userInput}
      />
      <button className={styles["form-btn"]} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
