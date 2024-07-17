import TodoItem from "./TodoItem";

let ItemsContainer = ({ todoItems , handleRemove}) => {
    return (
        <div className="items-container">
            {todoItems.map((item, index) => (
                <TodoItem key={index} passvalue={item} handleRemove = {()=> handleRemove(index)} />
            ))}
        </div>
    );
};

export default ItemsContainer;