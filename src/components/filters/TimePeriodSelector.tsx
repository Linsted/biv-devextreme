// src/components/filters/TimePeriodSelector.tsx

interface TimePeriodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TimePeriodSelector = ({
  value,
  onChange,
}: TimePeriodSelectorProps) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor="time-period-select" style={{ marginRight: 8 }}>
        Time Period:
      </label>
      <select
        id="time-period-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="LAST_7_DAYS">Last 7 Days</option>
        <option value="LAST_3_DAYS">Last 3 Days</option>
        <option value="LAST_30_DAYS">Last 30 Days</option>
      </select>
    </div>
  );
};
