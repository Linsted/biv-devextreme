// src/pages/MyDashboardPage.tsx
import { useState } from "react";
import { ChartWidget } from "../components/bi-ui-kit/ChartWidget";
import { TimePeriodSelector } from "../components/filters/TimePeriodSelector";
import { useVisualizationData } from "../hooks/data-adapters/useVisualizationData";
import type { ChartType } from "../components/bi-ui-kit/ChartWidget";

export const MyDashboardPage = () => {
  const [timePeriod, setTimePeriod] = useState("LAST_30_DAYS");

  // Chart configs for 12 charts
  const chartConfigs = [
    {
      title: "Sales (Bar)",
      metricId: "sales",
      dataKey: "sales",
      type: "bar" as ChartType,
    },
    {
      title: "Users (Line)",
      metricId: "users",
      dataKey: "users",
      type: "line" as ChartType,
    },
    {
      title: "Profit (Horizontal Bar)",
      metricId: "profit",
      dataKey: "profit",
      type: "horizontalBar" as ChartType,
    },
    {
      title: "Expenses (Grouped Bar)",
      metricId: "expenses",
      dataKey: "expenses",
      type: "groupedBar" as ChartType,
      groupKey: "region",
    },
    {
      title: "Sales (Pie)",
      metricId: "pie",
      dataKey: "value",
      type: "pie" as ChartType,
    },
    {
      title: "Users (Bar)",
      metricId: "users",
      dataKey: "users",
      type: "bar" as ChartType,
    },
    {
      title: "Profit (Line)",
      metricId: "profit",
      dataKey: "profit",
      type: "line" as ChartType,
    },
    {
      title: "Expenses (Horizontal Bar)",
      metricId: "expenses",
      dataKey: "expenses",
      type: "horizontalBar" as ChartType,
    },
    {
      title: "Sales (Grouped Bar)",
      metricId: "sales",
      dataKey: "sales",
      type: "groupedBar" as ChartType,
      groupKey: "category",
    },
    {
      title: "Profit (Pie)",
      metricId: "pie",
      dataKey: "value",
      type: "pie" as ChartType,
    },
    {
      title: "Expenses (Bar)",
      metricId: "expenses",
      dataKey: "expenses",
      type: "bar" as ChartType,
    },
    {
      title: "Users (Grouped Bar)",
      metricId: "users",
      dataKey: "users",
      type: "groupedBar" as ChartType,
      groupKey: "region",
    },
  ];

  // Call useVisualizationData for each chart at the top level
  const chartData0 = useVisualizationData({
    metricId: chartConfigs[0].metricId,
    timePeriod,
  });
  const chartData1 = useVisualizationData({
    metricId: chartConfigs[1].metricId,
    timePeriod,
  });
  const chartData2 = useVisualizationData({
    metricId: chartConfigs[2].metricId,
    timePeriod,
  });
  const chartData3 = useVisualizationData({
    metricId: chartConfigs[3].metricId,
    timePeriod,
  });
  const chartData4 = useVisualizationData({
    metricId: chartConfigs[4].metricId,
    timePeriod,
  });
  const chartData5 = useVisualizationData({
    metricId: chartConfigs[5].metricId,
    timePeriod,
  });
  const chartData6 = useVisualizationData({
    metricId: chartConfigs[6].metricId,
    timePeriod,
  });
  const chartData7 = useVisualizationData({
    metricId: chartConfigs[7].metricId,
    timePeriod,
  });
  const chartData8 = useVisualizationData({
    metricId: chartConfigs[8].metricId,
    timePeriod,
  });
  const chartData9 = useVisualizationData({
    metricId: chartConfigs[9].metricId,
    timePeriod,
  });
  const chartData10 = useVisualizationData({
    metricId: chartConfigs[10].metricId,
    timePeriod,
  });
  const chartData11 = useVisualizationData({
    metricId: chartConfigs[11].metricId,
    timePeriod,
  });
  const chartData = [
    chartData0,
    chartData1,
    chartData2,
    chartData3,
    chartData4,
    chartData5,
    chartData6,
    chartData7,
    chartData8,
    chartData9,
    chartData10,
    chartData11,
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard with Global Filters (DevExtreme)</h1>
      <TimePeriodSelector value={timePeriod} onChange={setTimePeriod} />
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          width: "100%",
        }}
      >
        {chartConfigs.map((cfg, idx) => (
          <div
            key={idx}
            style={{ border: "1px solid #ccc", padding: "10px", minWidth: 0 }}
          >
            <ChartWidget
              title={cfg.title}
              data={chartData[idx].data || []}
              dataKey={cfg.dataKey}
              type={cfg.type}
              groupKey={cfg.groupKey}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
