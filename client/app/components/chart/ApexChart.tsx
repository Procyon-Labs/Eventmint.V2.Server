import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartState {
  series: { name: string; data: number[] }[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<{}, ApexChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#A7FFA7"],
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.6,
            opacityTo: 0.1,
            stops: [-5.06, 60.13, 92.99],
            colorStops: [
              {
                offset: -5.06,
                color: "rgba(167, 255, 167, 0.60)",
                opacity: 0.6,
              },
              {
                offset: 60.13,
                color: "rgba(167, 255, 167, 0.10)",
                opacity: 0.1,
              },
              {
                offset: 92.99,
                color: "rgba(167, 255, 167, 0.00)",
                opacity: 0,
              },
            ],
          },
        },
        xaxis: {
          type: "category",
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
        },
        grid: {
          show: false, // Disabling the grid
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
