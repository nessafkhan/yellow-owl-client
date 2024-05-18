import React from 'react';
import { FaEdit, FaTrash, FaUserCircle } from 'react-icons/fa';
import { TableProps } from './Table.type';

const Table: React.FC<TableProps> = ({ data, onPrevPage, onNextPage, isPrevDisabled, isNextDisabled }) => {
  const isMobileView = window.innerWidth < 768;

  return (
    <div>
      <table className={`w-full bg-white rounded-md divide-y divide-gray-200`}>
        <thead>
          <tr className="text-gray-600">
            <th className="py-3">Name</th>
            <th className="py-3">Email</th>
            {!isMobileView && (
              <>
                <th className="py-3">Phone</th>
                <th className="py-3">Enroll Number</th>
                <th className="py-3">Date of Admission</th>
              </>
            )}
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row._id} className="text-gray-800">
              <td className="flex items-center py-4 ml-4">
                <FaUserCircle className="mr-2 text-lg" />
                {row.name}
              </td>
              <td className="py-3">{row.email}</td>
              {!isMobileView && (
                <>
                  <td className="py-3">{row.phone}</td>
                  <td className="py-3">{row.enroll_number}</td>
                  <td className="py-3">{row.admission_date}</td>
                </>
              )}
              <td className="flex space-x-2 py-3">
                <FaEdit className="text-blue-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-2">
        <button
          onClick={onPrevPage}
          disabled={isPrevDisabled}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={onNextPage}
          disabled={isNextDisabled}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
