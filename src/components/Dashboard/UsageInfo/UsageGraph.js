import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Grid } from "@material-ui/core";

const UsageGraph = () => {
  const options = {
    chart: {
      type: "column",
      height: "170",
      width: "330",
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Hours",
        data: [4, 7, 6, 5, 7, 2, 5],
      },
    ],
    xAxis: {
      title: {
        text: "",
      },
      categories: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "<b>Time<b>",
      },
    },
    tooltip: {
      shared: true,
      valuePrefix: "",
      valueDecimals: 2,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
  };
  return (
    <Grid lg={12} sm={12}>
      <HighchartsReact
        constructorType={"chart"}
        highcharts={Highcharts}
        options={options}
      />
    </Grid>
  );
};

export default UsageGraph;
