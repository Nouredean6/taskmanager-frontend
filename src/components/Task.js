import { FaEdit, FaRegTrashAlt, FaCheckDouble } from "react-icons/fa";

const Task = ({
  task,
  index,
  deleteTask,
  updateTask,
  getSingleTask,
  setToComplete,
}) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}.</b> {task.name}
      </p>
      <div className="task-icons">
        <FaCheckDouble
          onClick={() => {
            setToComplete(task);
          }}
          color="green"
        />
        <FaEdit
          onClick={() => {
            getSingleTask(task);
          }}
          color="purple"
        />
        <FaRegTrashAlt
          onClick={() => {
            deleteTask(task._id);
          }}
          color="red"
        />
      </div>
    </div>
  );
};

export default Task;
