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

function PercentageLoss(current: number, lastMonth: number) {
  if (isNaN(current) || isNaN(lastMonth)) {
    return 0;
  }

  const loss = ((lastMonth - current) / current) * 100;

  return loss.toFixed(2);
}

export const Cards = () => {
  const { locale } = useRouter();
  const translate = locale === "en" ? i18nhomeEnglish : i18nhomeFrench;
  const { data } = useQuery({
    queryFn: () => builder.use().transaction.transaction_overview(),
    queryKey: builder.transaction.transaction_overview.get(),
    select: ({ data }) => data?.data,
  });

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
            <h3
              className={clsx(
                idx === 0
                  ? "text-[#2F70F2]"
                  : idx === 1
                  ? "text-[#876AFE]"
                  : "text-[clamp(0.5rem,1vw,1rem)] whitespace-nowrap font-medium text-[#FFBC02]"
              )}
            >
              {item?.name}
            </h3>
          </div>

          <div className="flex items-center gap-[clamp(0.5rem,1vw,0.9rem)]">
            <h3 className=" font-semibold text-[clamp(1rem,1vw,1.5rem)] whitespace-nowrap text-[#121212] dark:text-white">
              {item?.current}
            </h3>
            <div className="flex items-center gap-[0.1rem]">
              {String(
                PercentageLoss(Number(item.last_month), Number(item.current))
              ).startsWith("-") ? (
                <ArrowDown2 size="24" color="#D62C2C" variant="Bold" />
              ) : (
                <ArrowUp2 size="24" color="#4EEA7A" variant="Bold" />
              )}

              <p
                className={clsx(
                  String(
                    PercentageLoss(
                      Number(item.last_month),
                      Number(item?.current)
                    )
                  ).startsWith("-")
                    ? "text-[#D62C2C]"
                    : "text-[#4EEA7A]",
                  "text-[clamp(0.5rem,1vw,1.5rem)] font-normal"
                )}
              >
                {PercentageLoss(
                  Number(item?.last_month),
                  Number(item?.current)
                )}
                %
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
