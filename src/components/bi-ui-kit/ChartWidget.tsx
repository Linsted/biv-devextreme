// src/components/bi-ui-kit/ChartWidget.tsx
import Chart, {
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Series,
  Tooltip,
  ValueAxis,
} from "devextreme-react/chart";
import PieChart, {
  Legend as PieLegend,
  Series as PieSeries,
  Tooltip as PieTooltip,
} from "devextreme-react/pie-chart";

export type ChartType = "bar" | "line" | "horizontalBar" | "groupedBar" | "pie";

interface ChartWidgetProps {
  title: string;
  data: any[];
  dataKey: string;
  type: ChartType;
  groupKey?: string;
  onPointClick?: (point: any) => void;
  palette?: string[];
}

const DEFAULT_COLORS = [
  "#1976d2", // blue
  "#388e3c", // green
  "#fbc02d", // yellow
  "#d32f2f", // red
  "#7b1fa2", // purple
  "#0288d1", // light blue
  "#c2185b", // pink
  "#ffa000", // orange
  "#388e3c", // green
  "#455a64", // blue grey
  "#8bc34a", // light green
  "#f44336", // bright red
];

export const ChartWidget = ({
  title,
  data,
  dataKey,
  type,
  groupKey,
  onPointClick,
  palette,
}: ChartWidgetProps) => {
  const COLORS = palette || DEFAULT_COLORS;
  const seriesName = dataKey.charAt(0).toUpperCase() + dataKey.slice(1);

  if (type === "pie") {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <h3>{title}</h3>
        <PieChart
          dataSource={data}
          palette={COLORS}
          height={300}
          onPointClick={onPointClick}
        >
          <PieSeries
            argumentField="name"
            valueField={dataKey}
            name={seriesName}
          />
          <PieLegend verticalAlignment="bottom" horizontalAlignment="center" />
          <PieTooltip
            enabled={true}
            customizeTooltip={(arg) => ({
              text: `${arg.argumentText}: ${arg.valueText}`,
            })}
          />
        </PieChart>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h3>{title}</h3>
      <Chart
        dataSource={data}
        palette={COLORS}
        height={300}
        onPointClick={onPointClick}
      >
        <CommonSeriesSettings
          argumentField="name"
          type={type === "line" ? "line" : "bar"}
          {...(type === "horizontalBar" ? { rotated: true } : {})}
        />
        {type === "groupedBar" && groupKey ? (
          [
            ...[...new Set(data.map((d) => d[groupKey]))].map(
              (group: string, idx: number) => (
                <Series
                  key={group}
                  valueField={dataKey}
                  name={group}
                  argumentField="name"
                  color={COLORS[idx % COLORS.length]}
                />
              )
            ),
          ]
        ) : (
          <Series valueField={dataKey} name={seriesName} color={COLORS[0]} />
        )}
        <ArgumentAxis />
        <ValueAxis />
        <Legend verticalAlignment="bottom" horizontalAlignment="center" />
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={(arg) => ({
            text: `${arg.seriesName}: ${arg.valueText}`,
          })}
        />
      </Chart>
    </div>
  );
};
