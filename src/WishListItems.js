import React from 'react';
import WishListItem from './WishListItem';
import './WishListItems.css';

const WishListItems = ({ items, onEditItem, onDeleteItem, onMoveItemToTop, onUpdatePriority }) => {
  const handlePriorityChange = (index, e) => {
    onUpdatePriority(index, e.target.value);
  };

  return (
    <div className="wish-list-items-container">
      {items && items.map((item, index) => (
        <WishListItem
          key={index}
          item={item}
          index={index}
          onEditItem={onEditItem} 
          onDeleteItem={onDeleteItem}
          onMoveItemToTop={() => onMoveItemToTop(index)}
          onUpdatePriority={(e) => handlePriorityChange(index, e)}
        />
      ))}
    </div>
  );
};

export default WishListItems;
