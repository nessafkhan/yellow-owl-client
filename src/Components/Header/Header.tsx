import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center">
        <h1 className="text-2xl font-bold">Students</h1>
      </div>
    </header>
  );
};

export default Header;
