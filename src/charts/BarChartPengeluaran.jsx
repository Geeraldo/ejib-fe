import axios from 'axios';
import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function BarChartPengeluaran({data}) {

    const dataCharts = useMemo(() => {
		if (data === undefined) return [];
		return data?.data?.map((item) => ({
			name: item.Bulan,
			total: item.total,
		}));
	}, [data]);
    console.log(dataCharts);

    const data121 = [
        {
            name: 'Januari',
            total: 1000,

        },
        {
            name: 'Febuari',
            total: 2000,
        },]



    return (
        <>
            <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">Pengeluaran </h2>
               </header>
                    <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={dataCharts}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                    barSize={200}
                                    barCategoryGap={10}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="total" fill="#6366F1" />
                                </BarChart>
                    </ResponsiveContainer>
            </div>
        </>
    );
}

;