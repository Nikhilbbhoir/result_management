import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
      <Link href="/admin">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      </Link>
      <ul>
        <li>
          <Link href="/admin/users">Users</Link>
        </li>
        <li>
          <Link href="/admin/subjects">Subjects</Link>
        </li>
        {/* Add more links for other sections */}
      </ul>
    </div>
  );
};

export default Sidebar;
