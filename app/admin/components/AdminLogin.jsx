'use client'
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data (optional)

      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      alert(data.message)
  
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        <label htmlFor="username" className="text-sm font-bold">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="text-sm font-bold">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        />
      </div>
      
      <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-700">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
