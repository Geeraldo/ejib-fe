import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChartPengeluaran(props) {

    const data = [
        {
            name: 'Januari',
            total: 1000,

        },
        {
            name: 'Febuari',
            total: 2000,
        },
        {
            name: 'Maret',
            total: 4000,
        },
        {
            name: 'April',
            total: 4000,
        },
        {
            name: 'Mei',
            total: 4000,
        },
        {
            name: 'Juni',
            total: 8000,
        },
        {
            name: 'Juli',
            total: 4000,
        },
        {
            name: 'Agustus',
            total: 500,
        },
        {
            name: 'September ',
            total: 4000,
        },
        {
            name: 'Oktober ',
            total: 4000,
        },
        {
            name: 'November ',
            total: 4000,
        },
        {
            name: 'Desember ',
            total: 4000,
        },
    ];
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
                                    data={data}
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