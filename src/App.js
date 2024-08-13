import React, { useEffect, useState } from 'react';
import './App.css';

import getData from './lib/service'; // Dosya yolunu projenize göre güncelleyin

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 1; // Test için bir userId belirleyin
        const result = await getData(userId);
        setData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <h2>Posts</h2>
      <ul>
        {data.posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

    





