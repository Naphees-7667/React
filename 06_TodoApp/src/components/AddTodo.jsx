import { useState } from "react";
import { MdAddCard } from "react-icons/md";

function AddTodo({ handleDataChange }) {
    const [todoName, settodoName] = useState("");
    const [dueDate, setdueDate] = useState("");

    const handleNameChange = (event) => {
        settodoName(event.target.value);
    };

    const handleDateChange = (event) => {
        setdueDate(event.target.value);
    };

    const handleButton = () => {
        handleDataChange(todoName, dueDate);
        settodoName("");
        setdueDate("");
    };

    return (
        <div className="container">
            <div className="row row-margin">
                <div className="col-6">
                    <input 
                        type="text" 
                        placeholder="Enter Todo Here" 
                        value={todoName} 
                        onChange={handleNameChange} 
                    />
                </div>
                <div className="col-4">
                    <input 
                        type="date" 
                        value={dueDate} 
                        onChange={handleDateChange} 
                    />
                </div> 
                <div className="col-2">
                    <button 
                        type="button" 
                        className="btn btn-success todo-btn" 
                        onClick={handleButton}
                    >
                        <MdAddCard />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;
