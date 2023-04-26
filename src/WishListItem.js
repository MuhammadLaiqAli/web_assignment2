import React from 'react';
import './WishListItem.css';

const WishListItem = ({ item, index, onEditItem, onDeleteItem, onMoveItemToTop, onUpdatePriority }) => {
  const handleEditClick = () => {
    onEditItem(index);
  };

  const handleDeleteClick = () => {
    onDeleteItem(index);
  };

  const handleMoveToTopClick = () => {
    onMoveItemToTop(index);
  };

  return (
    <div className="wish-list-item-container">
      <div className="wish-list-item-text">
        <div className="wish-list-item-priority">Priority:
          <input type="number" value={item.priority} onChange={onUpdatePriority} min={1} max={5} />
        </div>
        <div className="wish-list-item-name">{item.name}</div>
      </div>
      <div className="wish-list-item-buttons">
        <button className="wish-list-item-button" onClick={handleEditClick}>
          Edit
        </button>
        <button className="wish-list-item-button" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="wish-list-item-button" onClick={handleMoveToTopClick}>
          Move to Top
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
