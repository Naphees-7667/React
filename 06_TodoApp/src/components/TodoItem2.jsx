function TodoItem2() {
    let todoName = 'Go to Collage'
    let todoDate = '16/07/2024'
    return (
        <div class="container">
            <div class="row row-margin">
                <div class="col-6">
                {todoName}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger todo-btn">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem2;