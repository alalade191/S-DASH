import { Drawer, Group, Button, clsx } from "@mantine/core";
import { Category, Profile } from "iconsax-react";
import { Logo } from "./logo";
import { ThemeSwitcher } from "./switcher";
import { useRouter } from "next/router";
import { MdOutlineAnnouncement, MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";

import i18ncommonEnglish from "@/locales/en/common_en";
import { PiBriefcaseLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { FaFileInvoice } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsDatabase } from "react-icons/bs";
import i18ncommonfrench from "@/locales/fr/common_fr";

function UserDrawer({ opened, close }: any) {
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
      link: "/team",
    },
    { name: translator.navlink7, icon: <FaFileInvoice />, link: "/invoice" },
    {
      name: translator.navlink8,
      icon: <IoSettingsOutline />,
      link: "/settings",
    },
    {
      name: translator.navlink9,
      icon: <MdOutlineAnnouncement />,
      link: "/announcement",
    },
    {
      name: translator.navlink11,
      icon: <MdOutlinePermMedia />,
      link: "/media",
    },
    {
      name: "Client Feedback",
      icon: <MdOutlineAnnouncement />,
      link: "/client",
    },
  ];
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.2, blur: 2 }}
        size={250}
        position="left"
        withCloseButton={false}
      >
        <div className="bg-[#FFFFFF] dark:bg-[#0E0F0F] h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#2F70F2] border-r-[3px] lg:hidden flex-col gap-12 border-[#E3E3E3] p-7">
          <div className="flex flex-col space-y-6">
            <Logo />
            <ThemeSwitcher />
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col">
              <h3 className=" text-base pt-4 font-medium text-[#1F1F1F] dark:text-white">
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

                    <span className=" dark:text-white"> {name}</span>
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
                      asPath === link
                        ? `text-[#2F70F2] flex items-center space-x-2 text-[14px]`
                        : ` flex items-center space-x-2 text-[14px] font-normal hover:text-[#2F70F2]`
                    )}
                  >
                    <figure>{icon}</figure>

                    <span className=" dark:text-white">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
export default UserDrawer;
