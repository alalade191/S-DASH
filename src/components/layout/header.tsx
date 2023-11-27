import { Internationalization } from "@/internalization";
import { Avatar, Text } from "@mantine/core";
import { HambergerMenu, Message } from "iconsax-react";
import { TbSettings2 } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

import React from "react";
import { Search } from "@/search";
import Image from "next/image";
import { Notification } from "@/notification";
import { useTheme } from "next-themes";
import { NotificationDark } from "@/notification-dark";
import UserDrawer from "@/drawer";
import { useDisclosure } from "@mantine/hooks";
import { SwitchPopover } from "@/popover";
import { LanguagePop } from "@/language-pop";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <article className="z-10 sticky top-0 left-0 right-0 px-[clamp(1.5rem,2vw,2rem)] py-[1rem] bg-[#F7F7FF] dark:bg-[#0E0F0F] flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-y-2 lg:gap-y-0">
      <Search />
      <div className="lg:hidden block">
        <LanguagePop />
      </div>
      <div className="flex items-center justify-between">
        <span onClick={open} className="lg:hidden">
          <HambergerMenu size="32" />
        </span>
        <div className="flex items-center space-x-3 lg:space-x-6">
          <div className="flex items-center gap-[clamp(1rem,1.2vw,1.5rem)]">
            <Message className="cursor-pointer" size="24" />
            <TbSettings2 className="cursor-pointer" size={24} />
            <div className=" hidden lg:block">
              <LanguagePop />
            </div>
            {/* {theme === "light" ? <NotificationDark /> : <Notification />} */}
            {theme === "light" ? <NotificationDark /> : <Notification />}
          </div>
          <div className="flex items-center gap-[14px]">
            <Avatar size={34} radius="100%" src="/images/user.png" />
            <Text className="hidden lg:block text-base text-[#121212] dark:text-white font-semibold">
              Alex Smith
            </Text>
          </div>
        </div>
      </div>
      <UserDrawer opened={opened} close={close} />
    </article>
  );
};
