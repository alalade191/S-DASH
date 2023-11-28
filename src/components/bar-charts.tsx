import React from "react";
import { ArrowDown2 } from "iconsax-react";
import { GoDatabase } from "react-icons/go";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

import { Bar } from "react-chartjs-2";
import { WeekBarchart } from "./bar-chart";
import { MonthBarchart } from "./month-bar-chart";

export const ActivityCharts = () => {
  return (
    <section className=" px-6 py-28 flex flex-col min-[893px]:max-w-[258px] bg-white rounded-xl h-fit">
      <article className="flex gap-2 items-center pb-3 border-b border-platinum ">
        <GoDatabase size="20" />
        <h2 className="text-dark-gray text-base font-medium  ">
          Activity Charts
        </h2>
      </article>

      <section className="flex flex-col">
        <section className="flex min-[893px]:flex-col max-[893px]:justify-between gap-5">
          <article className="pt-4 flex gap-[10px] flex-col">
            <h4 className="text-gray text-sm ">Per Week</h4>

            <MonthBarchart />
          </article>
          <article className="pt-4 flex gap-[10px] flex-col">
            <h4 className="text-gray text-sm ">Per Month</h4>

            {/* <Barchart
              dataArray={[20, 18, 55, 35, 32, 12, 45, 35, 32, 12, 45]}
              bgColor={[
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
                "#876AFE",
                "#FFBC02",
              ]}
              label={["", "", "", "", "", "", "", "", "", ""]}
            /> */}
            <WeekBarchart />
          </article>
        </section>

        <article className="flex justify-between pt-[14px]">
          <h4 className="text-gray text-sm ">View Per Quarter</h4>
          <ArrowDown2 size="16" color="#121212" variant="Outline" />
        </article>
        <article className="flex justify-between pt-[14px]">
          <h4 className="text-gray text-sm ">View Per Year</h4>
          <ArrowDown2 size="16" color="#121212" variant="Outline" />
        </article>
      </section>
    </section>
  );
};
