import React from 'react';
// import Register from '../public/images/register/page';
import Register from './register/page';
import Dashboard from './components/Sidebar';
import CustomersList from './customers/page';
import Overview from './components/Overview';
export default function Home() {
  return (
    <main>
      <div className="flex">
        {/* <Register /> */}
        <div>
        {/* <Dashboard /> */}
        </div>
        <div className="">
        </div>
        <Overview/>
      </div>
    </main>
  );
}