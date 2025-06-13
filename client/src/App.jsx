import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Message from me:</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;
