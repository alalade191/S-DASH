import { Cards } from "@/cards";
import { Home } from "@/home";
import { DashboardLayout } from "@/layout/dashboard-layout";
import { QuickTransfer } from "@/quick-tansfer";
import { TotalPoint } from "@/total-points-table";
import { TransactionTable } from "@/transaction-details-table";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import React from "react";
import { useRouter } from "next/router";

export function getStaticProps({ locale }: any) {
  return {
    props: {
      locale,
    },
  };
}

const Dashboard = (props: any) => {
  const { locales } = useRouter();
  return (
    <DashboardLayout>
      <Home />
    </DashboardLayout>
  );
};

export default Dashboard;
