import { Cards } from "./cards";
import { TransactionTable } from "./transaction-details-table";
import { QuickTransfer } from "./quick-tansfer";
import { TotalPoint } from "./total-points-table";
import { ActivityChart } from "./activity-chart";
import { AreaBarChart } from "./area-chart";
import { AreaChartHeader } from "./area-chart-header";

export const Home = () => {
  return (
    <div className="bg-[#F6F6F6] dark:bg-[#010101] flex flex-col gap-[clamp(1rem,1.5vw,2rem)] px-[clamp(1rem,1.5vw,2rem)] py-[1rem]">
      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-9">
        <div className="flex-1 flex flex-col gap-[clamp(1rem,1.5vw,1.9rem)]">
          <Cards />
          <div className=" h-full">
            <AreaChartHeader />
            <AreaBarChart />
          </div>
        </div>

        <div className="flex flex-col gap-[clamp(0.7rem,1vw,1.5rem)] lg:w-[24.8rem]">
          <div>
            <TransactionTable />
          </div>
          <div>
            <QuickTransfer />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:gap-[1.5rem]">
        <div className="lg:w-[16rem] w-full h-full">
          <ActivityChart />
        </div>
        <div className=" flex-1  bg-white dark:bg-black rounded-xl">
          {" "}
          <TotalPoint />
        </div>
      </div>
    </div>
  );
};
