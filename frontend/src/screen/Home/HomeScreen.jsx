import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Your App</h1>
      <div className="d-flex justify-content-center">
        <Link to="/todos" className="btn btn-primary me-3">
          Todo List
        </Link>
        <Link to="/tweets" className="btn btn-primary">
          Tweet List
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
