import { builder } from "@/pages/api/builder";
import { Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { BsDatabase } from "react-icons/bs";

export const TotalPoint = () => {
  const { theme, setTheme } = useTheme();
  const tableData = [
    {
      id: 1,
      category_Name: "Office & Supplies",
      actual: "233.457",
      forcast: "123.456",
      variance_1: "123.456",
      variance_2: "123.456",
      variance_3: "123.456",
      variance_4: "123.456",
    },
    {
      id: 2,
      category_Name: "Office & Supplies",
      actual: "233.457",
      forcast: "123.456",
      variance_1: "123.456",
      variance_2: "123.456",
      variance_3: "123.456",
      variance_4: "123.456",
    },
    {
      id: 3,
      category_Name: "Office & Supplies",
      actual: "233.457",
      forcast: "123.456",
      variance_1: "123.456",
      variance_2: "123.456",
      variance_3: "123.456",
      variance_4: "123.456",
    },
    {
      id: 4,
      category_Name: "Office & Supplies",
      actual: "233.457",
      forcast: "123.456",
      variance_1: "123.456",
      variance_2: "123.456",
      variance_3: "123.456",
      variance_4: "123.456",
    },
    {
      id: 5,
      category_Name: "Office & Supplies",
      actual: "233.457",
      forcast: "123.456",
      variance_1: "123.456",
      variance_2: "123.456",
      variance_3: "123.456",
      variance_4: "123.456",
    },
  ];
  const { data: tablePoint } = useQuery({
    queryFn: () => builder.use().transaction.surplies_forcast(),
    queryKey: builder.transaction.surplies_forcast.get(),
    select: ({ data }) => data?.data,
  });
  const rows = tablePoint?.map((item, idx) => (
    <tr key={idx}>
      <td className=" font-normal text-sm text-[#A8A8A8]  dark:text-white whitespace-nowrap">
        {item?.name}
      </td>

      <td className=" font-normal text-sm text-[#A8A8A8]  dark:text-white">
        {item?.actual_value}
      </td>

      <td className=" font-normal text-sm text-[#A8A8A8]  dark:text-white">
        {item?.forecasted_value}
      </td>
      <td className=" font-normal text-sm text-[#A8A8A8]  dark:text-white">
        {item?.q1_variance}
      </td>

      <td className=" font-normal text-sm text-[#A8A8A8]  dark:text-white">
        {item?.q2_variance}
      </td>
      <td className=" font-normal text-sm text-[#A8A8A8] py-4 dark:text-white">
        {item?.q3_variance}
      </td>
      <td className=" font-normal text-sm text-[#A8A8A8] py-4 dark:text-white">
        {item?.q4_variance}
      </td>
    </tr>
  ));

  return (
    <div className="py-[32px] px-[48px] bg-white dark:bg-black rounded-xl">
      <div className="flex items-center w-full justify-between border-[#E3E3E3] dark:border-[#000000] border-b pb-4">
        <div className="flex items-center space-x-2">
          {theme === "dark" ? <BsDatabase /> : <BsDatabase />}
          <p className=" font-medium text-base text-[#121212] dark:text-white">
            Total Points
          </p>
        </div>
        <p className=" font-medium text-xs text-[#876AFE] dark:text-white">
          View all
        </p>
      </div>
      <div className=" overflow-auto mx-auto">
        <Table
          verticalSpacing={20}
          horizontalSpacing={20}
          className="mx-auto w-full overflow-auto"
        >
          <thead
            style={{
              borderBottom: "2px solid #121212",
            }}
          >
            <tr style={{}}>
              <th
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <Text className="dark:text-white whitespace-nowrap">
                  Category Name
                </Text>
              </th>
              <th
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <Text className="dark:text-white whitespace-nowrap">
                  Actual
                </Text>
              </th>
              <th
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <Text className="dark:text-white whitespace-nowrap">
                  ForCast
                </Text>
              </th>
              <th
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <Text className="dark:text-white">Variance </Text>
              </th>
              <th
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <Text className="dark:text-white">Variance </Text>
              </th>
              <th
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <Text className="dark:text-white">Variance </Text>
              </th>
              <th
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <Text className="dark:text-white">Variance </Text>
              </th>
            </tr>
          </thead>
          <tbody className="w-full">{rows}</tbody>
        </Table>
      </div>
    </div>
  );
};
