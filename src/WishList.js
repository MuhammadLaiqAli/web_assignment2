import React from 'react';
import './WishList.css';
import WishListMain from './WishListMain';
import WishListItems from './WishListItems';

const WishList = ({ items, onAddItem, onRemoveItem, onUpdatePriority, onMoveItemToTop }) => {
  return (
    <div className="wishListContainer">
      <WishListMain onSubmit={onAddItem} />
      <WishListItems 
        items={items}
        onDeleteItem={onRemoveItem}
        onEditItem={onUpdatePriority}
        onUpdatePriority={onUpdatePriority}
        onMoveItemToTop={onMoveItemToTop}
      />
    </div>
  );
};

export default WishList;
