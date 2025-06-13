import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Message from backend:</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;
