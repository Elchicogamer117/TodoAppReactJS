import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true); 
    const [item,setItem] = React.useState(initialValue);
    
    
    //Codigo que se ejecuta solo bajo ciertas condiciones
    React.useEffect(() => {
      setTimeout(() => {
        try{
          //Crear un almacenamiento local de nuestras tareas
          const localStorageItem = localStorage.getItem('itemName');
          let parsedItem;
          //Parsearlo en caso de que no exista
          if (!localStorageItem) {
            localStorage.setItem('itemName', JSON.stringify(initialValue));
            parsedItem = initialValue;
  
          }else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem)
          setLoading(false)
          } catch (error){
            setError(error)
  
          }
      }, 1000);
    });
  
  
    //Persistencia del estado en localstorage
    const saveItem = (newItem) => {
      try {
        const stringifyItem = JSON.stringify(newItem)
      localStorage.setItem('itemName', stringifyItem);
      setItem(newItem);
      } catch(error) {
        setError(error)
      }
    };
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }

  export{useLocalStorage}