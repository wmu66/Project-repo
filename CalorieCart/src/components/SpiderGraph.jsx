import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { getList, getHealthAmounts, getListAmounts } from "./Data";

const SpiderGraph = (test) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const options = {
        series: [
          {
            name: "Target",
            data: [0, 0, 0, 0, 0],
          },
          {
            name: "Daily stats",
            data: [
              Math.max(-25, Math.min(50, parseInt(100*getListAmounts().cals/getHealthAmounts().cals)-100)), 
              Math.max(-25, Math.min(50, parseInt(100*getListAmounts().fats/getHealthAmounts().fats)-100)), 
              Math.max(-25, Math.min(50, parseInt(100*getListAmounts().fibers/getHealthAmounts().fibers)-100)), 
              Math.max(-25, Math.min(50, parseInt(100*getListAmounts().proteins/getHealthAmounts().proteins)-100)), 
              Math.max(-25, Math.min(50, parseInt(100*getListAmounts().carbs/getHealthAmounts().carbs)-100))
            ],
          },
        ],
        chart: {
          height: 550,
          width: 650,
          type: "radar",
          toolbar: {
            show: false,
          },
          fontFamily: "Poppins",
          foreColor: "#000000",
          offsetY: -50,
          offsetX: 26,
        },
        colors: ["#EE6C4D", "#3D5A80"],
        fill: {
          opacity: [0.1, 0.7],
        },
        yaxis: {
          tickAmount: 6,
          min: -30,
          max: 30,
          labels: {
            formatter: (val) => `${val}%`,
            style: {
              fontSize: "14px",
              colors: ["#00000"],
            },
          },
        },
  
        xaxis: {
          categories: ["Calories", "Fats", "Fiber", "Protein", "Carbohydrates"],
          labels: {
            style: {
              fontSize: "14px",
              colors: [
                //this is the only way it would work for some reason
                "#00000",
                "#00000",
                "#00000",
                "#00000",
                "#00000",
                "#00000",
              ],
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val}%`,
          style: {
            fontSize: "12px",
          },
        },
        plotOptions: {
          radar: {
            size: undefined,
            offsetX: 0,
            offsetY: 0,
            polygons: {
              strokeColors: "#4A6C9F",
              strokeWidth: 1,
              connectorColors: "#4A6C9F",
              fill: {
                colors: ["#B2E3E8", "#E0FBFC"],
              },
            },
          },
        },
        tooltip: {
          enabled: true,
          intersect: true,
          enabledOnSeries: [1],
          hideEmptySeries: false,
        },
        legend: {
          fontSize: "16px",
          offsetY: -80,
        },
      };
      chart.updateOptions(options)
    }, 500);
    
    const options = {
      series: [
        {
          name: "Target",
          data: [0, 0, 0, 0, 0],
        },
        {
          name: "Daily stats",
          data: [
            Math.max(-25, Math.min(50, parseInt(100*getListAmounts().cals/getHealthAmounts().cals)-100)), 
            Math.max(-25, Math.min(50, parseInt(100*getListAmounts().fats/getHealthAmounts().fats)-100)), 
            Math.max(-25, Math.min(50, parseInt(100*getListAmounts().fibers/getHealthAmounts().fibers)-100)), 
            Math.max(-25, Math.min(50, parseInt(100*getListAmounts().proteins/getHealthAmounts().proteins)-100)), 
            Math.max(-25, Math.min(50, parseInt(100*getListAmounts().carbs/getHealthAmounts().carbs)-100))
          ],
        },
      ],
      chart: {
        height: 550,
        width: 650,
        type: "radar",
        toolbar: {
          show: false,
        },
        fontFamily: "Poppins",
        foreColor: "#000000",
        offsetY: -50,
        offsetX: 25,
      },
      colors: ["#EE6C4D", "#3D5A80"],
      fill: {
        opacity: [0.1, 0.7],
      },
      yaxis: {
        tickAmount: 6,
        min: -30,
        max: 30,
        labels: {
          formatter: (val) => `${val}%`,
          style: {
            fontSize: "14px",
            colors: ["#00000"],
          },
        },
      },

      xaxis: {
        categories: ["Calories", "Fats", "Fiber", "Protein", "Carbohydrates"],
        labels: {
          style: {
            fontSize: "14px",
            colors: [
              //this is the only way it would work for some reason
              "#00000",
              "#00000",
              "#00000",
              "#00000",
              "#00000",
              "#00000",
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        style: {
          fontSize: "12px",
        },
      },
      plotOptions: {
        radar: {
          size: undefined,
          offsetX: 0,
          offsetY: 0,
          polygons: {
            strokeColors: "#4A6C9F",
            strokeWidth: 1,
            connectorColors: "#4A6C9F",
            fill: {
              colors: ["#B2E3E8", "#E0FBFC"],
            },
          },
        },
      },
      tooltip: {
        enabled: true,
        intersect: true,
        enabledOnSeries: [1],
        hideEmptySeries: false,
      },
      legend: {
        fontSize: "16px",
        offsetY: -80,
      },
    };
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
      window.clearInterval(interval);
    };
  }, []);

  return <div ref={chartRef} />;
};

export default SpiderGraph;
