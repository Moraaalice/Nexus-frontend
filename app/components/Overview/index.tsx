"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';



const Overview = () => {
  const chartWidth = '800px'; 
  const chartHeight = '0px'; 

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Power Consumption (kW/h)',
        backgroundColor: '#2B39BD',
        borderColor: '#2B39BD',
        borderWidth: 1,
        data: [100, 20, 30, 10, 50, 60, 70, 40, 70, 100, 50, 12],
        classname:"text-1xl ml-10"
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top' as 'top',
      },
    },

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
          text: 'Power Consumption (kW/h)',
        },
      },
    },
  };
  const customers = [
    { name: 'Peter Maina', meterNumber: '12345', status: 'low' },
    { name: 'Peris Nduta', meterNumber: '67890', status: 'stable' },
    { name: 'Alice Moraa', meterNumber: '54321', status: 'low' },
    { name: 'Mary Apiu', meterNumber: '98765', status: 'stable' },
  
  ];
  return (
    <div className="py-1 ">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-black mb-2 mt-[2%] ml-[-61%]">Overview</h2>
        <div className="flex flex-wrap justify-center mt-[-7.5%] ml-[250px]">
          <div className="w-54 bg-blue-700 shadow-lg rounded-lg m-20 ml-6 p-6 text-center relative">
            <h3 className="text-2xl font-semibold text-white">Power Consumption</h3>
            <p className="text-3xl font-bold text-white mt-1">250 kW</p>
          </div>
          <div className="w-64 bg-blue-700 shadow-lg rounded-lg m-20 ml-9 p-6 text-center relative">
            <h3 className="text-2xl font-semibold text-white">Meters</h3>
            <p className="text-3xl font-bold text-white mt-1">30 kW</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
      <div className="flex flex-col items-center justify-center mt-[-7%] mr-[-6%]">
      <h2 className="text-1xl font-bold mb-4">Monthly Power Consumption</h2>
      <div style={{ width: chartWidth, height: chartHeight }}>
        <Bar data={data} options={options} />
      </div>
    </div>
      </div>
      <div>
      <div className="details-section w-full mt-[40%] ml-[12%]">
      <h2 className="text-2xl font-bold mb-3 ">Details</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left px-2 py-1">Customer</th>
            <th className="text-left px-2 py-1">Meter Number</th>
            <th className="text-left px-2 py-1">Status</th>
            <th className="text-left px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{customer.name}</td>
              <td className="py-2 px-4">{customer.meterNumber}</td>
              <td className="py-2 px-4 flex items-center">
                <div
                  className={`w-4 h-4 rounded-full ${
                    customer.status === 'low' ? 'bg-red-600' : 'bg-green-500'
                  }`}
                ></div>
                <span className="ml-2">
                  {customer.status === 'low' ? 'Low' : 'Stable'}
                </span>
              </td>
              <td className="py-1 px-4">
                <button className="px-3 py-1 bg-red-600 text-white rounded-md mr-2">Alert</button>
                <button className="px-3 py-1 bg-blue-700 text-white rounded-md">Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     
      </div>
    </div>
  );
};

export default Overview;
