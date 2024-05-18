import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/Table/Table';
import { StudentData } from '../../interfaces/studentData';
import { StudentListPropType } from './StudentList.type';

const StudentList: React.FC<StudentListPropType> = ({ onEdit }) => {
  const [data, setData] = useState<StudentData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/students', {
        params: {
          page_no: currentPage,
          page_size: itemsPerPage
        }
      });
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = data.length < itemsPerPage;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]); // Fetch data whenever currentPage changes


  return (
    (data && data.length && <Table
      data={data}
      onPrevPage={handlePrevPage}
      onNextPage={handleNextPage}
      isPrevDisabled={isPrevDisabled}
      isNextDisabled={isNextDisabled}
      onEdit={onEdit}
    />)
  );
};

export default StudentList;
