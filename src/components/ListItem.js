import Card from "./Card";
import styles from "../styles/ListItem.module.css";

const ListItem = (props) => {
  const deleteTaskHandler = () => {
    props.onDeleteTask(props.id);
  };
  return (
    <Card className={styles["list-item"]}>
      <li>
        <h3>{props.title}</h3>
        <h5 className={styles.delete} onClick={deleteTaskHandler}>
          Delete
        </h5>
      </li>
    </Card>
  );
};

export default ListItem;
