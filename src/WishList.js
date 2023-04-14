import React, { useState } from 'react';
import './WishList.css'; // Import CSS file for styling

const WishList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newPriority, setNewPriority] = useState('');
  const [updatedPriority, setUpdatedPriority] = useState('');

  const handleNewItemChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleNewPriorityChange = (e) => {
    setNewPriority(e.target.value);
  };

  const handleUpdatedPriorityChange = (e) => {
    setUpdatedPriority(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem && newPriority) {
      const item = { name: newItem, priority: newPriority };
      setItems([...items, item]);
      setNewItem('');
      setNewPriority('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleUpdatePriority = (index) => {
    const updatedItems = [...items];
    updatedItems[index].priority = updatedPriority;
    setItems(updatedItems);
    setUpdatedPriority('');
  };

  const handleMoveToTop = (index) => {
    const updatedItems = [...items];
    const item = updatedItems.splice(index, 1);
    updatedItems.unshift(item[0]);
    setItems(updatedItems);
  };

  return (
    <div className="wish-list-container">
      <h1>Wish List</h1>
      <ul className="wish-list-items">
        {items.map((item, index) => (
          <li key={index} className="wish-list-item">
            <div className="item-details">
              <span className="item-name">Item Name : {item.name} &nbsp;</span>
              <span className="item-name">Priority: {item.priority}</span>
            </div>
            <div className="item-actions">
              <button className="remove-btn" onClick={() => handleRemoveItem(index)}>
                Remove
              </button>
              <input
                type="text"
                className="update-priority-input"
                value={updatedPriority}
                onChange={handleUpdatedPriorityChange}
                placeholder="Priority"
              />
              <button className="update-btn" onClick={() => handleUpdatePriority(index)}>
                Update Priority
              </button>
              <button className="move-top-btn" onClick={() => handleMoveToTop(index)}>
                Move to Top
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-item-container">
        <input
          type="text"
          className="add-item-input"
          value={newItem}
          onChange={handleNewItemChange}
          placeholder="Add item"
        />
        <input
          type="text"
          className="add-priority-input"
          value={newPriority}
          onChange={handleNewPriorityChange}
          placeholder="Priority"
        />
        <button className="add-btn" onClick={handleAddItem}>
          Add
        </button>
      </div>
    </div>
  );
};

export default WishList;
