import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-2xl font-bold">Result Management</h1>
      </Link>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/">Login</Link>
          <Link href="/register">Register</Link>
        {/* Add login and register links based on user authentication status */}
        {/** Replace with logic to check user authentication */}
        { /* Use NextAuth.js or other auth providers */}
        {/*
        !authenticated && (
          <>
            <Link href="/login">
              <a className="hover:text-gray-200">Login</a>
            </Link>
            <Link href="/register">
              <a className="hover:text-gray-200">Register</a>
            </Link>
          </>
        )}
        */}
      </nav>
    </header>
  );
};

export default Header;
