import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import {PieChart, Pie, ResponsiveContainer,Legend,Label,Cell, Tooltip} from 'recharts';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  // const chartData = {
  //   labels: ['Musafir Kleak', 'Imanuel Bahu', 'Sobat Kristus'],
  //   datasets: [
  //     {
  //       label: 'Pendapatan Terbanyak',
  //       data: [
  //         35, 30, 35,
  //       ],
  //       backgroundColor: [
  //         tailwindConfig().theme.colors.indigo[500],
  //         tailwindConfig().theme.colors.blue[400],
  //         tailwindConfig().theme.colors.indigo[800],
  //       ],
  //       hoverBackgroundColor: [
  //         tailwindConfig().theme.colors.indigo[600],
  //         tailwindConfig().theme.colors.blue[500],
  //         tailwindConfig().theme.colors.indigo[900],
  //       ],
  //       hoverBorderColor: tailwindConfig().theme.colors.white,
  //     },
  //   ],
  // };


    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Pendapatan Terbanyak</h2>
      </header>

      <ResponsiveContainer>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardCard06;
