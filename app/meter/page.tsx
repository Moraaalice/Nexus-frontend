'use client'
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Meter = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Number of Customers',
        backgroundColor: '#2B39BD',
        borderColor: '#2B39BD',
        borderWidth: 1,
        data: [100, 20, 30, 10, 50, 60, 70, 40, 70, 100, 50, 12],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Monthly Customer Retention',
        },
      },
    },
  };

  const customers = [
    { name: ' Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Mary Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Juliet Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Maureen Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Juliet Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Maureen Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' }
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCustomers = customers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  return (
    <div>
      <div className='grid place-items-center'>
      <h2 className="text-blue-500 ">Peris Ndimu</h2>
      </div>
<div className="flex">
  <div className="flex flex-col ml-80 mt-">
    <p className="text-black">Current reading</p>
    <p className="text-black">23.0</p>
    <hr className="h-0.5 my-4 w-80 bg-blue-500 border-0 dark:bg-blue-600 dark:border-blue-600" />
    <p className="text-black">Date</p>
    <p className="text-black">12-04-2023</p>
    <hr className="h-0.5 my-4 w-80 bg-blue-500 border-0 dark:bg-blue-600 dark:border-blue-600 mt-[12%]" />
  </div>
  <div className="flex flex-col mt-6 ml-40">
    <p className="text-black">Status</p>
    <p className="text-black">Active</p>
    <hr className="h-0.5 my-4 w-80 bg-blue-500 border-0 dark:bg-blue-600 dark:border-blue-600 " />
    <p className="text-black">Meter Serial No</p>
    <p className="text-black">256</p>
    <hr className="h-0.5 my-4 w-80 bg-blue-500 border-0 dark:bg-blue-600 dark:border-blue-600 mb-10" />
  </div>
</div>
      <div className="flex flex-col items-center justify-center w-[75%] mx-auto ml-[20%] mt-[10%]">
        <h2 className="text-xl font-bold mb-4 mt-3"></h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Meter;
