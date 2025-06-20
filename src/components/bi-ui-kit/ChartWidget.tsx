// src/components/bi-ui-kit/ChartWidget.tsx
import Chart, {
  Series,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  Legend,
  CommonSeriesSettings,
} from 'devextreme-react/chart';
import PieChart, { Series as PieSeries, Tooltip as PieTooltip, Legend as PieLegend } from 'devextreme-react/pie-chart';

export type ChartType = 'bar' | 'line' | 'horizontalBar' | 'groupedBar' | 'pie';

interface ChartWidgetProps {
  title: string;
  data: any[];
  dataKey: string;
  type: ChartType;
  groupKey?: string;
  onPointClick?: (point: any) => void;
}

export const ChartWidget = ({ title, data, dataKey, type, groupKey, onPointClick }: ChartWidgetProps) => {
  const seriesName = dataKey.charAt(0).toUpperCase() + dataKey.slice(1);

  if (type === 'pie') {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <h3>{title}</h3>
        <PieChart dataSource={data} palette="Violet" height={300} onPointClick={onPointClick}>
          <PieSeries argumentField="name" valueField={dataKey} name={seriesName} />
          <PieLegend verticalAlignment="bottom" horizontalAlignment="center" />
          <PieTooltip enabled={true} customizeTooltip={arg => ({ text: `${arg.argumentText}: ${arg.valueText}` })} />
        </PieChart>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3>{title}</h3>
      <Chart
        dataSource={data}
        palette="Violet"
        height={300}
        onPointClick={onPointClick}
      >
        <CommonSeriesSettings
          argumentField="name"
          type={type === 'line' ? 'line' : 'bar'}
          {...(type === 'horizontalBar' ? { rotated: true } : {})}
        />
        {type === 'groupedBar' && groupKey
          ? [
              ...[...new Set(data.map(d => d[groupKey]))].map((group: string) => (
                <Series key={group} valueField={dataKey} name={group} argumentField="name" />
              ))
            ]
          : <Series valueField={dataKey} name={seriesName} />
        }
        <ArgumentAxis />
        <ValueAxis />
        <Legend verticalAlignment="bottom" horizontalAlignment="center" />
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={arg => ({ text: `${arg.seriesName}: ${arg.valueText}` })}
        />
      </Chart>
    </div>
  );
};
