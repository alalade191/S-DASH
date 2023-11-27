import { builder } from "@/pages/api/builder";
import { MasterCard } from "@/public/icons/master";
import { VisaCard } from "@/public/icons/visa-card";
import { useQuery } from "@tanstack/react-query";
import { Wallet3 } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    id: 1,
    card: <VisaCard />,
    details: "3419 Debit Card",
  },

  {
    id: 2,
    card: <MasterCard />,
    details: "3419 Debit Card",
  },
  {
    id: 3,
    card: <VisaCard />,
    details: "3419 Debit Card",
  },
  //   {
  //     id: 4,
  //     card: <MasterCard />,
  //     details: "3419 Debit Card",
  //   },
];
export const QuickTransfer = () => {
  const { theme, setTheme } = useTheme();
  const { data } = useQuery({
    queryFn: () => builder.use().transaction.lattest_transaction(),
    queryKey: builder.transaction.lattest_transaction.get(),
    select: ({ data }) => data?.data,
  });

  console.log({ data });
  return (
    <div className="p-5 bg-white dark:bg-[#010101] rounded-xl flex flex-col gap-5">
      <div className="flex items-center gap-2 border-b border-[#E3E3E3] w-full  pb-3">
        {
          theme === "dark" ? (
            <Wallet3 color="#ffffff" />
          ) : (
            <Wallet3 color="#000000" />
          )
          // <Image height={20} width={20} alt="wallet" src="/images/wallet.svg" />
        }
        <h3 className=" font-medium text-base  text-[#121212] dark:text-white">
          Quick Transfer
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:gap-0 lg:flex items-center lg:space-x-4 overflow-x-auto scrollbar-none">
        {cardData.map(({ id, card, details }) => (
          <div
            className="min-w-[145px] max-w-[145px] flex items-center gap-2 py-2 px-3 border border-[#DFDFDF] rounded-md"
            key={id}
          >
            <div>{card}</div>

            <span className="font-medium text-[clamp(0.50rem,1vw,0.75rem)]">
              {details}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
