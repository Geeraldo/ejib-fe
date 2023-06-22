import React from 'react';
import {useState,useEffect} from 'react';
import { useRecentPengeluaran } from './stores';
import { FormatRupiah } from "@arismun/format-rupiah";

function Recent() {

  const [state,actions ] = useRecentPengeluaran();
  console.log(state)
  useEffect(() => {
    actions.loadData();
  }, []);
  console.log(state?.data?.data)
  const recentPengeluaran = state?.data?.data.map((item, index) => (
    <li  key={index} className="flex px-2">
    <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
      <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
        <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
      </svg>
    </div>
    <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
      <div className="grow flex justify-between">
      <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{item.KeteranganGereja}  </a>Pengeluaran<a className="font-medium text-slate-800" href="#0"> <FormatRupiah value={item?.pengeluaranJumlah} /> </a> {item?.pengeluaranKeterangan}</div>
        <div className="shrink-0 self-end ml-2">
          <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
        </div>
      </div>
    </div>
  </li>
    // <option key={index} value={item?.GerejaId}>{item?.KeteranganGereja}</option>
	));

  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Aktivitas Terbaru</h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">Hari ini</header>
          <ul className="my-1">
            {/* Item */}
            {recentPengeluaran}
            {/* Item */}
            {/* <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                  <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">Musafir Kleak  </a>Pengeluaran<a className="font-medium text-slate-800" href="#0"> Rp. 5.000.000 </a> Gaji Bulan Oktober Pemain Musik</div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                  </div>
                </div>
              </div>
            </li> */}
            {/* Item */}
            {/* <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
                  <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
                </svg>
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">Sobat Kristus  </a>Pemasukan<a className="font-medium text-slate-800" href="#0"> Rp. 300.000 </a> Sumbangan Keluarga NN</div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">View<span className="hidden sm:inline"> -&gt;</span></a>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Recent;
