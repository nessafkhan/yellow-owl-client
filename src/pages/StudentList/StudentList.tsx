import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../Components/Table/Table';
import { StudentData } from '../../interfaces/studentaData';

const StudentList: React.FC = () => {
  const [data, setData] = useState<StudentData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Mock API call to fetch data
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Table data={data} />
  );
};

export default StudentList;
