'use client'
import Image from "next/image";
import ResponsiveAppBar from "./Navbar";
import Sidebar from "./Sidebar";
import SimpleBarChart from "./BarChart";
import BiaxialBarChart from "./Chart";
import PieColor from "./VerticalChart";
import DataGridPremiumDemo from "./Grid";
export default function Home() {
  return (
    <main>
    <ResponsiveAppBar/>
    <div className="flex flex-wrap">
    <Sidebar/>
     <div className="flex flex-wrap ml-10">
      <SimpleBarChart/>
      <BiaxialBarChart/>
      
     </div>
     <PieColor/>
     <DataGridPremiumDemo/>
    </div>
    </main>
  );
}
