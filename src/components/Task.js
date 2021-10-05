import ListItem from "./ListItem";
import styles from "../styles/Task.module.css";

const Task = (props) => {
  const taskList = props.taskItems.map((task) => (
    <ListItem
      onDeleteTask={props.onDeleteTask}
      key={task.id}
      id={task.id}
      title={task.title}
    />
  ));
  return <ul className={styles.task}>{taskList}</ul>;
};

export default Task;
