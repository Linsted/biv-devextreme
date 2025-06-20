// src/pages/MyDashboardPage.tsx
import { useState } from "react";
import type { ChartType } from "../components/bi-ui-kit/ChartWidget";
import { ChartWidget } from "../components/bi-ui-kit/ChartWidget";
import { TimePeriodSelector } from "../components/filters/TimePeriodSelector";
import { useVisualizationData } from "../hooks/data-adapters/useVisualizationData";

export const MyDashboardPage = () => {
  const [timePeriod, setTimePeriod] = useState("LAST_30_DAYS");
  // Drilldown state: null = top level, otherwise region name
  const [drillRegion, setDrillRegion] = useState<string | null>(null);

  // Drilldown data logic
  const salesData = useVisualizationData({ metricId: "sales", timePeriod });
  // For drilldown, filter by region and group by category
  const drilldownData = drillRegion
    ? (salesData.data || [])
        .filter((d: any) => d.region === drillRegion)
        .map((d: any) => ({ ...d, name: d.category }))
    : (salesData.data || []).reduce((acc: any, cur: any) => {
        const found = acc.find((a: any) => a.region === cur.region);
        if (found) found.sales += cur.sales;
        else
          acc.push({ name: cur.region, region: cur.region, sales: cur.sales });
        return acc;
      }, []);

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

  // Define unique palettes for each chart
  const chartPalettes = [
    ["#1976d2", "#388e3c", "#fbc02d", "#d32f2f"], // multi-color for Sales (Pie)
    ["#388e3c", "#a5d6a7"], // green
    ["#fbc02d", "#fff59d"], // yellow
    ["#d32f2f", "#ef9a9a"], // red
    ["#7b1fa2", "#ce93d8"], // purple
    ["#0288d1", "#4dd0e1"], // light blue
    ["#c2185b", "#f06292"], // pink
    ["#ffa000", "#ffd54f"], // orange
    ["#388e3c", "#c5e1a5"], // green alt
    ["#455a64", "#b0bec5"], // blue grey
    ["#8bc34a", "#dcedc8"], // light green
    ["#f44336", "#ffccbc"], // bright red
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard with Global Filters (DevExtreme)</h1>
      <TimePeriodSelector value={timePeriod} onChange={setTimePeriod} />
      <hr />
      <div style={{ marginBottom: 24, maxWidth: 400 }}>
        <ChartWidget
          title={
            drillRegion
              ? `Sales by Category in ${drillRegion}`
              : "Sales by Region (Drilldown)"
          }
          data={drilldownData}
          dataKey="sales"
          type="bar"
          onPointClick={(point) => {
            if (!drillRegion) setDrillRegion(point.target.originalArgument);
          }}
        />
        {drillRegion && (
          <button style={{ marginTop: 8 }} onClick={() => setDrillRegion(null)}>
            Back to Regions
          </button>
        )}
      </div>
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
              palette={
                cfg.title === "Sales (Pie)"
                  ? chartPalettes[0]
                  : chartPalettes[idx % chartPalettes.length]
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
