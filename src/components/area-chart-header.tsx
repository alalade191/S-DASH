import { ArrowDown2 } from "iconsax-react";
import { DateInput } from "@mantine/dates";
import React from "react";

export const AreaChartHeader = () => {
  return (
    <div className="lg:flex items-center lg:justify-between  space-y-4 lg:space-y-0">
      <section className="flex gap-6 justify-between lg:justify-normal">
        <article className="flex gap-[10px] items-center">
          <h3 className="text-[#444] text-base dark:text-white">Salary</h3>
          <span className="bg-[#876AFE] w-[18px] h-[18px] rounded-[5px]"></span>
        </article>
        <article className="flex gap-[10px] items-center">
          <h3 className="text-[#444] text-base dark:text-white">Cash bond</h3>
          <span className=" w-[18px] bg-[#FFBC02] h-[18px] rounded-[5px]"></span>
        </article>
      </section>
      <section className="flex gap-4 justify-between">
        <DateInput
          label={
            <span className="text-gray text-xs/168 dark:text-white">From</span>
          }
          classNames={{
            root: "flex gap-4 !items-center,",
            input: "bg-inherit",
          }}
          styles={{
            root: {
              alignItems: "center",
            },
            input: {
              width: "95px",
              border: "none",
              "&::placeholder": {
                color: "#121212 !important",
                fontSize: "14px",
                lineHeight: "22px",
              },
            },
          }}
          rightSection={<ArrowDown2 size="16" color="#121212" />}
          valueFormat="DD MMM"
          placeholder="20 June"
        />
        <DateInput
          label={
            <span className="text-gray text-xs/168 dark:text-white">To</span>
          }
          classNames={{
            root: "flex gap-4 !items-center",
            input: "bg-inherit",
          }}
          styles={{
            root: {
              alignItems: "center",
            },
            input: {
              width: "95px",
              border: "none",
              "&::placeholder": {
                color: "#121212 !important",
                fontSize: "14px",
                lineHeight: "22px",
              },
            },
          }}
          rightSection={<ArrowDown2 size="16" color="#121212" />}
          valueFormat="DD MMM"
          placeholder="20 July"
        />
      </section>
    </div>
  );
};
