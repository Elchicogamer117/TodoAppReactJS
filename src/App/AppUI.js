import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal} from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";




function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleateTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext)


    return (
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            {error && <p> Desesperate, hubo un error</p>}
            {loading && <p> Cargando...</p>}
            {(!loading && !searchedTodos.length) && <p> Crea tu primer TODO </p>}

            {searchedTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDeleate={() => deleateTodo(todo.text)} />
            ))}
        </TodoList>

        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

        <CreateTodoButton/>
      </React.Fragment>
      
    );
  }
  
  export { AppUI };