import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import Chart from "react-apexcharts";

const LineChart = () => {
  const series = [
    {
      name: "Sales",
      data: [55, 35, 57, 38, 22, 45, 16, 36, 64, 74],
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 300,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    // forecastDataPoints: {
    //   count: 7,
    // },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      //   type: "numeric",
      categories: ["10", "11", "12", "01", "02", "03", "04", "05", "06", "07"],
      tickAmount: 10,
      labels: {
        formatter: function (val: string) {
          return `${val}am`;
        },
      },
    },
    title: {
      text: "",
      align: "left",
      style: {
        fontSize: "16px",
        color: "",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FF5BEF"],
        shadeIntensity: 0,
        type: "horizontal",
        opacityFrom: 0.9 as number,
        opacityTo: 0.4 as number,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          fontSize: "12px",
          colors: "#030229",
          fontWeight: "400",
          fontFamily: "Nunito",
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },
  };

  return (
    <div id="chart">
      <ApexCharts
        options={options}
        series={series}
        type="line"
        height={300}
        width={"100%"}
      />
    </div>
  );
};

export default LineChart;
