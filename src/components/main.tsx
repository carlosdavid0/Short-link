import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "./aside";
import Navbar from "./navbar";

export default function Main() {


  return (
    <div className="overflow-x-auto relative  flex justify-start">
      <Aside />
      
      <main className="w-full bg-slate-200 dark:bg-slate-700">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
