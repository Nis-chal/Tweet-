import { Routes, Route } from "react-router-dom";
import TodoListScreen from "../screen/Todo/TodoListScreen";

const TodoRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoListScreen />} />
    </Routes>
  );
};

export default TodoRoute;
