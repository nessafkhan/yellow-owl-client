import React, { useState } from 'react';
import { FaEdit, FaTrash, FaUserCircle } from 'react-icons/fa';

interface TableRow {
  id: number;
  name: string;
  email: string;
  phone: string;
  enrollNumber: string;
  dateOfAdmission: string;
}

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const isMobileView = window.innerWidth < 768;

  return (
    <div className="mt-4">
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
          {currentItems.map(row => (
            <tr key={row.id} className="text-gray-800">
              <td className="flex items-center py-3">
                <FaUserCircle className="ml-2 mr-2 text-lg" />
                {row.name}
              </td>
              <td className="py-3">{row.email}</td>
              {!isMobileView && (
                <>
                  <td className="py-3">{row.phone}</td>
                  <td className="py-3">{row.enrollNumber}</td>
                  <td className="py-3">{row.dateOfAdmission}</td>
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
      <div className="flex justify-between mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;