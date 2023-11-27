import i18ncommonEnglish from "@/locales/en/common_en";
import i18nhomeEnglish from "@/locales/en/home_en";
import i18nhomeFrench from "@/locales/fr/home_fr";
import { builder } from "@/pages/api/builder";
import { ActiveUser } from "@/public/icons/active-user";
import { CardIssue } from "@/public/icons/card-issued";
import { Transaction } from "@/public/icons/transaction";
import { clsx } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";

const cardData = [
  {
    id: 1,
    icon: <ActiveUser />,
    headings: "Active Users",
    amount: "14,7 M",
    percentage: "32%",
    arrow: <ArrowUp2 color="#4eea7a" variant="Bold" />,
  },

  {
    id: 2,
    icon: <Transaction />,
    headings: "Transactions",
    amount: "$ 1.234.10",
    percentage: "32%",
    arrow: <ArrowDown2 color="#d62c2c" variant="Bold" />,
  },

  {
    id: 3,
    icon: <CardIssue />,
    headings: "Cards Issued",
    amount: "3.442",
    percentage: "32%",
    arrow: <ArrowUp2 color="#4eea7a" variant="Bold" />,
  },
];

export const Cards = () => {
  const { locale } = useRouter();
  const translate = locale === "en" ? i18nhomeEnglish : i18nhomeFrench;
  const { data } = useQuery({
    queryFn: () => builder.use().transaction.transaction_overview(),
    queryKey: builder.transaction.transaction_overview.get(),
    select: ({ data }) => data?.data,
  });

  //   console.log({ data });
  const globalName = useCallback((name: string) => {
    switch (name) {
      case "active_users":
        return translate.active_users;
        break;

      case "transactions":
        return translate.transactions;
        break;

      case "cards_issued":
        return translate.card_issued;
        break;

      default:
        return "not listed";
        break;
    }
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 rounded-xl gap-[clamp(1rem,1.5vw,25rem)]">
      {data?.map((item, idx) => (
        <div
          key={idx}
          className=" p-[clamp(1rem,1vw,1.5rem)] rounded-xl flex flex-col justify-between bg-white dark:bg-[#010101]"
        >
          <div className="flex gap-[clamp(0.4rem,1vw,0.7rem)] items-center">
            {idx === 0 ? (
              <ActiveUser />
            ) : idx === 1 ? (
              <Transaction />
            ) : (
              <CardIssue />
            )}
            {/* <figure>{icon}</figure> */}
            <h3
              className={clsx(
                idx === 0
                  ? "text-[#2F70F2]"
                  : idx === 1
                  ? "text-[#876AFE]"
                  : "text-[clamp(0.5rem,1vw,1rem)] whitespace-nowrap font-medium text-[#FFBC02]"
              )}
            >
              {item?.name && globalName(item.name)}
            </h3>
          </div>

          <div className="flex items-center gap-[clamp(0.5rem,1vw,0.9rem)]">
            <h3 className=" font-semibold text-[clamp(1rem,1vw,1.5rem)] whitespace-nowrap text-[#121212] dark:text-white">
              {item?.current}
            </h3>
            <div className="flex items-center gap-[0.1rem]">
              {idx === 0 || idx === 2 ? (
                <ArrowUp2 color="#4eea7a" variant="Bold" />
              ) : (
                <ArrowDown2 color="#d62c2c" variant="Bold" />
              )}
              {/* <figure>{arrow}</figure> */}
              <p className=" text-[clamp(0.5rem,1vw,1.5rem)] font-normal">
                {item?.last_month}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
