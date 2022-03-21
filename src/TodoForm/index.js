import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const[newTodoValue, setNewTodoValue] = React.useState('');
    const {addTodo, setOpenModal} =React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };


    return(
        <form onSubmit = {onSubmit}>
            <label>Escriber un nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Salir a correr"
            />
            <div>
                <button type="button" className="TodoForm-button TodoForm-buttonCancel" 
                        onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submmit" className="TodoForm-button TodoForm-buttonAdd">
                    Añadir
                </button>
            </div>

        </form>
    );
}


export { TodoForm }