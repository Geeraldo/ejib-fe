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
import BarChartPemasukan from "../charts/BarChartPemasukan";
import BarChartPengeluaran from '../charts/BarChartPengeluaran';
import axios from 'axios';
import { useResultPemasukan } from './stores/pemasukan';



function Dashboard() {
  const [gerejaId , setGerejaId] = useState("")


  const [statepemasukan,setStatepemasukan ] = useState()
  const [statepengeluaran,setStatepengeluaran ] = useState()
  const [statechartpengeluaran,setStatechartpengeluaran ] = useState()
  const [statetotal,setTotal] = useState()
  console.log(statechartpengeluaran)
  console.log("total-----",statetotal);

  useEffect(() => {

    actions.loadData()
  }, []);
  const [state,actions ] = useListGereja();









  const getInitialState = () => {
    const value = "1";
    return value;
  };
  const handleChange = (e) => {
    e.preventDefault();
    const base_url_pemasukan = `http://localhost:4000/transaction/result/pemasukan/${e.target.value}`
    const base_url_pengeluaran = `http://localhost:4000/transaction/result/pengeluaran/${e.target.value}`
    const base_url_chart_pengeluaran = `http://localhost:4000/transaction/chart/pengeluaran/${e.target.value}`
    axios.get(base_url_pemasukan).then((response) => {
      console.log(response)
      setStatepemasukan(response.data);
    });
    axios.get(base_url_pengeluaran).then((response) => {
      setStatepengeluaran(response.data);
    });
    axios.get(base_url_chart_pengeluaran).then((response) => {
      setStatechartpengeluaran(response.data);
    });
  };




  const option = state?.data?.data?.map((item, index) => (
    <option key={index} value={item?.GerejaId} >{item?.KeteranganGereja}</option>
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
                <div className="relative inline-flex">
                  <select onChange={handleChange}>
                    <option value="">Pilih Gereja</option>
                    {option}
                  </select>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <Pemasukan data={statepemasukan}/>
              <Pengeluaran data={statepengeluaran}/>
              <Total pemasukan={statepemasukan} pengeluaran={statepengeluaran}  />
              {/*<Rekapan />*/}
              <BarChartPemasukan  />
              <BarChartPengeluaran data={statechartpengeluaran} />
              <DashboardCard06 />
              <DashboardCard07 />
            </div>
            <div className="grid grid-cols-12 w-full py-5">
            <Recent />
            </div>
            {/* <div className="grid grid-cols-12 w-full py-5">
              <BarChartPemasukan />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}


export default Dashboard;