import { Logo } from "@/logo";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiBriefcaseLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { Header } from "./header";
import { ThemeSwitcher } from "@/switcher";
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
