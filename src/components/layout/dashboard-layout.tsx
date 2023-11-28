import React from "react";

import { Header } from "./header";
import { Sidebar } from "@/sidebar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-[100vh] max-h-[100vh]  overflow-hidden flex">
      <Sidebar />

      <div className="flex-1 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-[#2F70F2]">
        <Header />
        {children}
      </div>
    </div>
  );
};
