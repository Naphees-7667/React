import { CiSquareRemove } from "react-icons/ci";

function TodoItem({ passvalue, handleRemove }) {
  return (
    <div className="container">
      <div className="row row-margin">
        <div className="col-6">{passvalue.name}</div>
        <div className="col-4">{passvalue.value}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-btn"
            onClick={handleRemove}
          >
            <CiSquareRemove />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
