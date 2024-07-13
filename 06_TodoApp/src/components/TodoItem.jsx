// import ItemsContainer from "./ItemsContainer";

function TodoItem({todoName,todoDate}) {
    return (
        <div className="container">
            <div className="row row-margin">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger todo-btn">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;