'use client'
import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let response = await fetch('/api/user/');
        response = await response.json()
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch users.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle user deletion
  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      setError(null);

      await fetch(`/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      
    } catch (error) {
      console.error(error);
      setError('Failed to delete user.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-4">
      {isLoading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr className='bg-zinc-200'>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Father Name</th>
              <th className="px-4 py-2">School</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Roll</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.roll}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.fathername}</td>
                <td className="px-4 py-2">{user.school}</td>
                <td className="px-4 py-2">{user.className}</td>
                <td className="px-4 py-2">{user.roll}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.contact}</td>
                <td className="px-4 py-2">
                  <button
                    type="button"
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 disabled:opacity-50"
                    disabled={isLoading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUsers;
