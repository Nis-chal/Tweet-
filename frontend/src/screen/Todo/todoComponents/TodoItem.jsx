import { deleteTodo, updateTodo } from "../../../api/todoApi";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const handleDelete = async (e) => {
    e.stopPropagation();
    await deleteTodo(todo._id);
    onDelete(todo._id);
  };

  const handleToggleComplete = async () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    const { data } = await updateTodo(todo._id, updatedTodo);
    onUpdate(data);
  };

  return (
    <div
      className={`card mb-3 ${todo.completed ? "bg-success text-white" : ""}`}
    >
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <button
          className={`btn ${
            todo.completed ? "btn-warning" : "btn-success"
          } me-2`}
          onClick={handleToggleComplete}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
