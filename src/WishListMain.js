import React from "react";
import "./WishListMain.css";

const WishListMain = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [priority, setPriority] = React.useState(1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: inputValue,
      priority: priority
    };
    onSubmit(newItem);
    setInputValue("");
    setPriority(1);
  };

  return (
    <header className="wish-list-header">
      <h1>My WishList :</h1>
      <form onSubmit={handleSubmit}>
        <input style={{border:'2px solid purple', borderRadius:'10px',marginTop:'20px'}}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder=" Add Wish"
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="0">Priority 0</option>
          <option value="1">Priority 1</option>
          <option value="2">Priority 2</option>
          <option value="3">Priority 3</option>
          <option value="4">Priority 4</option>
          <option value="5">Priority 5</option>
          <option value="6">Priority 6</option>
          <option value="7">Priority 7</option>
          <option value="8">Priority 8</option>
          <option value="9">Priority 9</option>

        </select>
        <button type="submit">Add</button>
      </form>
    </header>
  );
};

export default WishListMain;
