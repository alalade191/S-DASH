import React from "react";
import { ThemeSwitcher } from "./switcher";
import { Category, Profile } from "iconsax-react";
import { PiBriefcaseLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { SlLock } from "react-icons/sl";
import { useRouter } from "next/router";
import { clsx } from "@mantine/core";
import Link from "next/link";
import { Logo } from "./logo";
import i18ncommonEnglish from "@/locales/en/common_en";
import i18ncommonfrench from "@/locales/fr/common_fr";

export const Sidebar = () => {
  const { asPath, locale } = useRouter();

  const translator = locale === "en" ? i18ncommonEnglish : i18ncommonfrench;

  const data = [
    { name: translator.navlink1, icon: <Category size={18} />, link: "/" },
    { name: translator.navlink2, icon: <Profile size={18} />, link: "/files" },
    {
      name: translator.navlink3,
      icon: <PiBriefcaseLight />,
      link: "/deadline",
    },
    { name: translator.navlink4, icon: <SlLock />, link: "/management" },
    { name: translator.navlink5, icon: <BsDatabase />, link: "/database" },
  ];

  const customer = [
    {
      name: translator.navlink6,
      icon: <AiOutlineTeam />,
      //   link: "/team",
    },
    { name: translator.navlink7, icon: <FaFileInvoice />, link: "/invoice" },
    {
      name: translator.navlink8,
      icon: <IoSettingsOutline />,
      //   link: "/settings",
    },
    {
      name: translator.navlink9,
      icon: <MdOutlineAnnouncement />,
      //   link: "/announcement",
    },
    {
      name: translator.navlink10,
      icon: <MdOutlinePermMedia />,
      //   link: "/media",
    },
    {
      name: translator.navlink11,
      icon: <MdOutlineAnnouncement />,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#0E0F0F] w-[220px] max-w-[220px] h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#2F70F2] border-r-[3px] hidden  lg:flex flex-col gap-12 border-[#E3E3E3] p-7">
      <div className="flex flex-col space-y-6">
        <Logo />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col">
          <h3 className=" text-base font-medium text-[#1F1F1F] dark:text-white">
            {translator.navlink12}
          </h3>

          <div className="w-full h-[1px] my-4 bg-[#E3E3E3]"></div>
          <div className="flex flex-col gap-7">
            {data.map(({ name, icon, link }) => (
              <div
                key={name}
                className={clsx(
                  asPath === link
                    ? `text-[#2F70F2] flex items-center space-x-2 text-[14px]`
                    : `flex items-center space-x-2 text-[14px] font-normal hover:text-[#2F70F2]`
                )}
              >
                <figure>{icon}</figure>
                <Link href={link}>{name}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className=" text-base font-medium text-[#1F1F1F] dark:text-white">
            {translator.navlink13}
          </h3>
          <div className="w-full h-[1px] my-4 bg-[#E3E3E3]"></div>

          <div className="flex flex-col gap-7">
            {customer.map(({ name, icon, link }) => (
              <div
                key={name}
                className={clsx(
                  "flex items-center text-[14px] space-x-2",
                  asPath === link ? `text-[#2F70F2]` : `hover:text-[#2F70F2]`
                )}
              >
                <figure>{icon}</figure>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
