'use client'
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useGetUsers from '../hooks/useGetUser';
import Link from 'next/link';

const CustomersList = () => {
  const { customers } = useGetUsers();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (selectedFilter: React.SetStateAction<string>) => {
    setFilter(selectedFilter);
  };

  const handleCustomerClick = (customerId: string) => {
    window.location.href = `/meters/${customerId}`; 
  };

  const filteredData = customers.filter((item: { name: string; company_name: string; location: string; phonenumber: string; }) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phonenumber.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'all') {
      return matchesSearch;
    } else if (filter === 'company') {
      return item.company_name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (filter === 'location') {
      return item.location.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (filter === 'phonenumber') {
      return item.phonenumber.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  return (
    <div className="flex h-screen -mt-90">
      <div className="flex- p-4 overflow-y-auto bg-white text-black">
        <div className="">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="border border-gray-300 rounded-full p-2 text-black bg-gray-100 pl-10 pr-6 w-3/5 mx-60"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
          <h1 className="text-3xl font-bold my-2 px-4">Customers</h1>
          <h1 className="text-2xl font-semibold text-blue-600 my-4 px-4">
            {`${filter === 'all' ? 'All' : filter}(${filteredData.length})`}
          </h1>
          <div className="mb-4 px-4">
            <div className="relative inline-flex">
              <select
                className="border border-black px-4 py-2 bg-white"
                onChange={(e) => handleFilterChange(e.target.value)}
                value={filter}>
                <option value="all">All</option>
                <option value="company">Company</option>
                <option value="location">Location</option>
                <option value="phonenumber">Phone Number</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <table className="table-auto w-[1200px] border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Company Name</th>
                <th className="px-4 py-2 text-left">Phone Number</th>
                <th className="px-4 py-2 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item: { name: string; company_name: string; location: string; phonenumber: string; }, index: number) => (
                <tr
                  key={index}className="cursor-pointer"onClick={() => handleCustomerClick(item.name  )}>
          
                  <td className="px-4 py-2 text-left text-gray-700">{item.name}</td>
                  
                  <td className="px-4 py-2 text-left text-gray-700">{item.company_name}</td>
                  
                  <td className="px-4 py-2 text-left text-gray-700">{item.phonenumber}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{item.location}</td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersList;
