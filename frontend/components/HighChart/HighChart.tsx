import "./Highchart.css";
import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  chart: {
    type: "bar",
    backgroundColor: "#373737",
    borderRadius: 20,
  },
  title: {
    text: "Monthly Expenses and Earnings",
    style: { color: "white" },
  },
  xAxis: {
    labels: {
      style: {
        color: "white",
      },
    },
    categories: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  yAxis: {
    min: 0,
    max: 50000,
    title: {
      text: "Amount",
      style: { color: "white" },
    },
    labels: {
      format: "${value}", // Format labels as currency
      style: {
        color: "white",
      },
    },
  },
  legend: {
    reversed: true,
    itemStyle: {
      color: "#333",
    },
  },
  plotOptions: {
    series: {
      stacking: "normal",
    },
  },
  series: [
    {
      type: "bar",
      name: "Expenses",

      color: "#FF9284",
      data: [
        10000, 15000, 8000, 12000, 20000, 9000, 18000, 13000, 10000, 15000,
        12000, 17000,
      ],
    },
    {
      type: "bar",

      name: "Earnings",
      color: "#B7FFE1",
      data: [
        15000, 12000, 18000, 10000, 12000, 25000, 15000, 20000, 18000, 12000,
        15000, 20000,
      ],
    },
  ],
};

export default function Highchart(props: HighchartsReact.Props) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <>
      <div className="lalayoutHighyout">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          // constructorType={"chart"}
          ref={chartComponentRef}
          {...props}
        />
      </div>
    </>
  );
}
