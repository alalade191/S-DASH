import Image from "next/image";
import React from "react";
import { WeekBarchart } from "./bar-chart";
import { MonthBarchart } from "./month-bar-chart";
import { ArrowDown2 } from "iconsax-react";

export const ActivityChart = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-[#010101] rounded-xl px-6 py-7 h-full">
      <div className="flex items-center gap-2 border-[#E3E3E3] border-b pb-4">
        <Image
          height={20}
          width={20}
          alt="database"
          src="/images/database.svg"
        />
        <p className=" font-medium text-base text-[#121212] dark:text-white">
          Activity Charts
        </p>
      </div>

      <div className="flex flex-col pt-4">
        <p className=" font-medium text-sm text-[#A8A8A8] dark:text-white">
          Per week
        </p>
        <WeekBarchart />
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-sm text-[#A8A8A8] dark:text-white">
          Per Month
        </p>
        <MonthBarchart />
      </div>
      <article className="flex justify-between pt-[14px]">
        <h4 className="font-normal text-sm text-[#A8A8A8] dark:text-white">
          View Per Quarter
        </h4>
        <ArrowDown2 size="16" variant="Outline" />
      </article>
      <article className="flex justify-between pt-[14px]">
        <h4 className=" font-normal text-sm text-[#A8A8A8] dark:text-white">
          View Per Year
        </h4>
        <ArrowDown2 size="16" variant="Outline" />
      </article>
    </div>
  );
};
