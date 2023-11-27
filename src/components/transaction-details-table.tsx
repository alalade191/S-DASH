import React, { useCallback } from "react";
import { Avatar, Table, clsx } from "@mantine/core";
import Image from "next/image";
import { Solar } from "@/public/icons/solar";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/pages/api/builder";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import i18nhomeEnglish from "@/locales/en/home_en";
import i18nhomeFrench from "@/locales/fr/home_fr";
import { SolarLightMode } from "@/public/icons/solar-light";
import { useTheme } from "next-themes";

export const TransactionTable = () => {
  const { theme, setTheme } = useTheme();
  const { locale } = useRouter();
  const translate = locale === "en" ? i18nhomeEnglish : i18nhomeFrench;
  const transactionData = [
    {
      id: 1,
      image: "/images/spotify.svg",
      amount: "-$12.7",
      headings: "Spotify App",
      date: "June 19 2023 at 16.42",
    },
    {
      id: 2,
      image: "/images/adobe.svg",
      amount: "-$20.74",
      headings: "Adobe XD 2023",
      date: "June 12 2023 at 16.42",
    },
    {
      id: 3,
      image: "/images/upwork.svg",
      amount: "-$10.812.7",
      headings: "Upwork",
      date: "June 12 2023 at 16.42",
    },
    {
      id: 4,
      image: "/images/google.svg",
      amount: "-$124.32",
      headings: "Google Cloud",
      date: "June 2 2023 at 16.42",
    },
  ];

  const { data } = useQuery({
    queryFn: () => builder.use().transaction.lattest_transaction(),
    queryKey: builder.transaction.lattest_transaction.get(),
    select: ({ data }) => data?.data,
  });

  return (
    <div className="w-full">
      <div className=" p-5 rounded-xl bg-white dark:bg-[#010101]">
        <div className="flex items-center gap-2 border-b border-[#E3E3E3] pb-4">
          {theme === "light" ? <Solar /> : <SolarLightMode />}

          <h2 className=" font-medium text-base  text-[#121212] dark:text-white">
            Transaction Details
          </h2>
        </div>

        <div className="flex flex-col gap-5 pt-[18px]">
          {data?.map((item, idx) => (
            <div className="flex items-center justify-between" key={idx}>
              <div className="flex items-center gap-3">
                <Image
                  height={34}
                  width={34}
                  alt=""
                  src={item.charged_by.logo ?? ""}
                />
                <div className="flex flex-col">
                  <h3 className=" font-medium text-xs  text-[#121212] dark:text-white">
                    {item?.charged_by?.company}
                  </h3>
                  <p className=" font-normal text-[9px] text-[#A8A8A8] dark:text-white">
                    {
                      dayjs(item?.created_at).format(
                        "YYYY-MM-DD"
                      ) as unknown as string
                    }
                  </p>
                </div>
              </div>
              <span
                className={clsx(
                  idx === 0
                    ? "text-[#D62C2C]"
                    : idx === 1
                    ? "text-[#D62C2C]"
                    : idx === 2
                    ? "text-[#4EEA7A]"
                    : "text-[#D62C2C]",
                  "font-medium text-[10px]"
                )}
              >
                {idx === 2 ? "+" : "-"} {item?.charge?.currency.sign}{" "}
                {item?.charge?.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
