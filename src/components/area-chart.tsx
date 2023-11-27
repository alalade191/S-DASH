import { builder } from "@/pages/api/builder";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function formatNumberInMillions(number: number) {
  if (typeof number !== "number") return;

  const million = 1000000;
  const result = number / million;

  const roundedResult = Math.round(result);
  return `${roundedResult}`;
}

export function AreaBarChart() {
  const { data: Logs } = useQuery({
    queryFn: () => builder.use().transaction.transaction_log(),
    queryKey: builder.transaction.transaction_log.get(),

    select: ({ data }) =>
      data?.data?.map((list) => ({
        name: dayjs(list?.date).format("DD MMM"),
        uv: formatNumberInMillions(list?.cash_bond_bought),
        pv: formatNumberInMillions(list?.salary_paid),
        amt: formatNumberInMillions(list?.salary_paid),
      })),
  });

  console.log({ Logs });

  return (
    <ResponsiveContainer width="100%" height={290}>
      <AreaChart
        data={Logs}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop stop-color="#AF9CED" stop-opacity="0.19" />
            <stop offset="0.998978" stop-color="#AF9CED" stop-opacity="0.01" />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" color="white" />
        <YAxis dataKey="pv" />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#FFBC02"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#876AFE"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
