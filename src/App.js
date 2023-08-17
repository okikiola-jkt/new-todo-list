import React from "react";
import { useState } from "react";

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

    function addItem(){
      if (!newItem){
        alert("Enter an item")
      }
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
      };

      setItems(oldList => [...oldList, item]);
      setNewItem("");
    }
    function deleteItem(id){
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray)
    }
  return (
    <div className="App">
         <header>
            <h1>My Todo List</h1>
          </header>
          
            <input 
              type="text" 
              className="todo-input" 
              placeholder="Add new item..."
              value={newItem}
              onChange={e => setNewItem(e.target.value)} 
            />
            <button onClick={() => addItem()} className="todo-button">Add</button>
          
          
        
              <ul className="todo-list">
                {items.map(item => {
                  return(
                    <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button></li>
                  )
                } )}
              </ul>
        
    </div>
  );
}

export default App;
