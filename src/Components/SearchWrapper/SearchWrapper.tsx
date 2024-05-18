import React from 'react';

const SearchWrapper: React.FC = () => {
  return (
    <div className="p-4 flex items-center justify-between flex-wrap">
      <h1 className="text-2xl font-bold">Students</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="w-[296.93px] h-[41px] px-[17px] py-[8px] border-t border-l border-r border-b-0 rounded-tl-md rounded-md opacity-100"
        />
        <button
          className="w-[172.91px] h-[48px] bg-green-500 text-white rounded-tr-md rounded-md opacity-100"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchWrapper;
