import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props){
 //Llamada del Custom Hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);
  
  //Lista[Array] de tareas
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  // Determinamos la cantidad de tareas completadas filtrando en array y las enviamos a Counter a traves del return
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Sentencia para filtrar solo las tareas que cumplen con las letras ingresadas en TodoSearch
  let searchedTodos = [];
  
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);

    });
    
  }

  //Arrow funtion para marcar como completada una tarea, clonando la tarea y validando que sea el mismo texto
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; //poder desmarcar 
    saveTodos(newTodos);

  };
  

  const deleateTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //rebanadas de pan a eliminar
    saveTodos(newTodos);

  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed:false,
      text,
    }) 
    saveTodos(newTodos);

  };

  //Codigo que se ejecuta solo bajo ciertas condiciones
  React.useEffect(() => {
    console.log('Use effect');

  });
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleateTodo,
            openModal,
            setOpenModal, 
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export{TodoContext, TodoProvider};
//<TodoContext.Consumer></TodoContext.Consumer>