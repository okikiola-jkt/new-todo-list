import React from "react";
import { useState } from "react";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  
  const handleAddItem = (event) => {
    event.preventDefault();

    if (newItem.trim() == '') {
      alert("Enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  const deleteItem = (id) => {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
         <header>
            <h1>My Todo List</h1>
          </header>

          <form onSubmit={handleAddItem}>
            <input
              type="text"
              className="todo-input"
              placeholder="Add new item..."
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
            />

            <button className="todo-button" >Add</button>
          </form>
          
          
        
              <ul className="todo-list">
                {items.map(item => {
                  return(
                    <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)} className="delete-icon">❌</button></li>
                  )
                } )}
              </ul>
        
    </div>
  );
}

export default App;