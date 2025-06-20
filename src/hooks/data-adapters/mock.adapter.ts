// src/hooks/data-adapters/mock.adapter.ts
export interface VisualizationConfig { metricId: string; timePeriod: string; }
const salesData = [
  { name: 'Day 1', sales: 4000, region: 'North', category: 'A' },
  { name: 'Day 2', sales: 4200, region: 'South', category: 'B' },
  { name: 'Day 3', sales: 3900, region: 'North', category: 'A' },
  { name: 'Day 4', sales: 5000, region: 'South', category: 'B' },
  { name: 'Day 5', sales: 6000, region: 'North', category: 'A' },
  { name: 'Day 6', sales: 6500, region: 'South', category: 'B' },
  { name: 'Day 7', sales: 7000, region: 'North', category: 'A' },
];
const usersData = [
  { name: 'Day 1', users: 120, region: 'North', category: 'A' },
  { name: 'Day 2', users: 130, region: 'South', category: 'B' },
  { name: 'Day 3', users: 125, region: 'North', category: 'A' },
  { name: 'Day 4', users: 180, region: 'South', category: 'B' },
  { name: 'Day 5', users: 200, region: 'North', category: 'A' },
  { name: 'Day 6', users: 210, region: 'South', category: 'B' },
  { name: 'Day 7', users: 230, region: 'North', category: 'A' },
];
const profitData = [
  { name: 'Day 1', profit: 1000, region: 'North', category: 'A' },
  { name: 'Day 2', profit: 1200, region: 'South', category: 'B' },
  { name: 'Day 3', profit: 900, region: 'North', category: 'A' },
  { name: 'Day 4', profit: 1500, region: 'South', category: 'B' },
  { name: 'Day 5', profit: 1600, region: 'North', category: 'A' },
  { name: 'Day 6', profit: 1700, region: 'South', category: 'B' },
  { name: 'Day 7', profit: 1800, region: 'North', category: 'A' },
];
const expensesData = [
  { name: 'Day 1', expenses: 500, region: 'North', category: 'A' },
  { name: 'Day 2', expenses: 700, region: 'South', category: 'B' },
  { name: 'Day 3', expenses: 600, region: 'North', category: 'A' },
  { name: 'Day 4', expenses: 800, region: 'South', category: 'B' },
  { name: 'Day 5', expenses: 900, region: 'North', category: 'A' },
  { name: 'Day 6', expenses: 950, region: 'South', category: 'B' },
  { name: 'Day 7', expenses: 1000, region: 'North', category: 'A' },
];
const pieData = [
  { name: 'Product A', value: 40 },
  { name: 'Product B', value: 30 },
  { name: 'Product C', value: 20 },
  { name: 'Product D', value: 10 },
];

export const fetchMockData = async (config: VisualizationConfig): Promise<any[]> => {
  console.log('Fetching mock data with config:', config);
  await new Promise(resolve => setTimeout(resolve, 500));
  switch (config.metricId) {
    case 'sales': return config.timePeriod === 'LAST_3_DAYS' ? salesData.slice(-3) : salesData;
    case 'users': return config.timePeriod === 'LAST_3_DAYS' ? usersData.slice(-3) : usersData;
    case 'profit': return config.timePeriod === 'LAST_3_DAYS' ? profitData.slice(-3) : profitData;
    case 'expenses': return config.timePeriod === 'LAST_3_DAYS' ? expensesData.slice(-3) : expensesData;
    case 'pie': return pieData;
    default: return salesData;
  }
};
