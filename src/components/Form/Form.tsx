import React, { useState } from 'react';
import { StudentData } from '../../interfaces/studentData';
import { FormProps } from './Form.type';


const Form: React.FC<FormProps> = ({ initialValues = {}, onSubmit, onCancel, isEditing }) => {
  const [values, setValues] = useState<Partial<StudentData>>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values)
  };

  return (
    <div className="flex justify-center items-center p-3">
      <form onSubmit={handleSubmit} className="w-100 h-full p-8 bg-gray-100 rounded border border-gray-300">
        <h2 className="mb-1 text-gray-700 font-medium">{`${isEditing ? 'Edit Student' : 'Add New Student'}`}</h2>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            value={values.name || ''}
            onChange={handleChange}
            className="w-72 h-8 px-3 mt-1 border rounded border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={values.email || ''}
            onChange={handleChange}
            className="w-72 h-8 px-3 mt-1 border rounded border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder='Phone Number'
            value={values.phone || ''}
            onChange={handleChange}
            className="w-72 h-8 px-3 mt-1 border rounded border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="enroll_number"
            name="enroll_number"
            placeholder='Enroll Number'
            value={values.enroll_number || ''}
            onChange={handleChange}
            className="w-72 h-8 px-3 mt-1 border rounded border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            id="admission_date"
            name="admission_date"
            placeholder='Date of Admission'
            value={values.admission_date || ''}
            onChange={handleChange}
            className="w-72 h-8 px-3 mt-1 border rounded border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <button type="submit" className="w-64 h-8 bg-green-500 text-white rounded">Submit</button>
          <button type="button" onClick={onCancel} className="w-64 h-8 mt-1 bg-red-500 text-white rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
