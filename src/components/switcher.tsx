import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import React from "react";
export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <figure className="border border-[#ccc] rounded-lg p-2 justify-between flex">
      <div
        onClick={() => setTheme("light")}
        className="p-1 px-5 rounded-lg bg-[#2F70F2] justify-center cursor-pointer"
      >
        <Sun1 size={20} />
      </div>
      <div
        onClick={() => setTheme("dark")}
        className="p-1 px-5 rounded-lg iflex justify-center bg-[#E3E3E3] cursor-pointer"
      >
        <Moon size={20} />
      </div>
    </figure>
  );
};
