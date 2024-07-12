function AddTodo() {
    return (
        <div class="container">
            <div class="row row-margin">
                <div class="col-6">
                    <input type="text" placeholder="Enter Todo Here" />
                </div>
                <div class="col-4">
                    <input type="date"></input>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success todo-btn">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;