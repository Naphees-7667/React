import TodoItem from "./TodoItem";

let ItemsContainer = ({todoItems}) => {
    return (
        <div className="items-container">
            {todoItems.map(item => 
            <TodoItem todoName={item.name} todoDate={item.value} />)}
        </div>
    );
};

export default ItemsContainer;
