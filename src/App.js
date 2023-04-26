import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (name, priority) => {
    const newItems = [...items, { name, priority }];
    setItems(newItems);

  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updatePriority = (index, priority) => {
    const newItems = [...items];
    newItems[index].priority = priority;
    setItems(newItems);
  };

  const moveItemToTop = (index) => {
    const newItems = [...items];
    const item = newItems.splice(index, 1)[0];
    newItems.unshift(item);
    setItems(newItems);
  };

  const sortItemsByPriority = () => {
    const newItems = [...items];
    newItems.sort((a, b) => b.priority - a.priority);
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.itemName.value;
        const priority = parseInt(e.target.priority.value);
        addItem(name, priority);
        e.target.reset();
      }}>
        <input type="text" name="itemName" placeholder="Item name" required />
        <input type="number" name="priority" placeholder="Priority" required />
        <button type="submit">Add item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name} (priority: {item.priority})</span>
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => updatePriority(index, parseInt(prompt('New priority:')))}>Update priority</button>
            <button onClick={() => moveItemToTop(index)}>Move to top</button>
          </li>
        ))}
      </ul>
      <button onClick={sortItemsByPriority}>Sort by priority</button>
    </div>
  );
}

export default App;
