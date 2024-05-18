import React from 'react'
import Form from '../../components/Form/Form';
import { AddOrEditStudentPropsType } from './AddOrEditStudent.type';
import { StudentData } from '../../interfaces/studentData';

const AddOrEditStudent: React.FC<AddOrEditStudentPropsType> = ({ onCancel, isEditing }) => {

  const handleSubmit = async (values: Partial<StudentData>) => {
    console.log('>>>>>>>>>', values);

    // try {
    //   if (initialValues._id) {
    //     await axios.put(`your-api-url/${initialValues._id}`, values);
    //   } else {
    //     await axios.post('your-api-url', values);
    //   }
    //   onSubmit(values as StudentData);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        onCancel={onCancel}
        isEditing={isEditing}
      />
    </>
  )
}

export default AddOrEditStudent;