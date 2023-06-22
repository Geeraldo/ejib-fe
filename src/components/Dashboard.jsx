import React, { useState, useEffect } from 'react';
import { useListGereja } from './stores';
import Sidebar from './Sidebar';
import Header from '../partials/Header';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import Pemasukan from './Pemasukan';
import Pengeluaran from './Pengeluaran';
import Total from './Total';
import Banner from './Banner';
import Rekapan from './Rekapan';
import Recent from './Recent';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';

function Dashboard() {
  const [state,actions ] = useListGereja();
  useEffect(() => {
    actions.loadData();
  }, []);

  const getInitialState = () => {
    const value = "1";
    return value;
  };
  const [gerejaId , setGerejaId] = useState("")
  const handleChange = (e) => {
    setGerejaId(e.target.value);
  };
  const option = state?.data?.data?.map((item, index) => (
    <option key={index} value={item?.GerejaId}>{item?.KeteranganGereja}</option>
	));



  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebar2Open={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <Banner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-right sm:items-center mb-8">

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-end sm:justify-end gap-2">
                {/* Filter button */}
                <div className="relative inline-flex">
                  <select onChange={handleChange}>
                    {option}
                  </select>
                </div>
                {/* Datepicker built with flatpickr */}
                {/* <Datepicker /> */}
                {/* Add view button */}
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <Pemasukan gerejaId={gerejaId}/>
              <Pengeluaran gerejaId={gerejaId} />
              <Total />
              {/* Bar chart (Direct vs Indirect) */}
              <Rekapan />
              {/* Line chart (Real Time Value) */}
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />
              {/* Line chart (Sales Over Time) */}
            </div>
            <div className="grid grid-cols-12 w-full py-5">
            <Recent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default Dashboard;