import React, { useState } from "react";
import axios from "axios";
import './Github.css'; // Import CSS file for styling

const Github = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
      setUsers(response.data.items);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <h1>Github UserName Search</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Type UserName..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={`${user.login} Avatar`} />
              <span>UserName : <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a></span>
              <span>&nbsp;Profile Url : <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.html_url}
              </a></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Github;
