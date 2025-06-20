// src/hooks/data-adapters/mock.adapter.ts
export interface VisualizationConfig {
  metricId: string;
  timePeriod: string;
}
const salesData = [
  { name: "Day 1", sales: 4000, region: "North", category: "A" },
  { name: "Day 2", sales: 4200, region: "South", category: "B" },
  { name: "Day 3", sales: 3900, region: "North", category: "A" },
  { name: "Day 4", sales: 5000, region: "South", category: "B" },
  { name: "Day 5", sales: 6000, region: "North", category: "A" },
  { name: "Day 6", sales: 6500, region: "South", category: "B" },
  { name: "Day 7", sales: 7000, region: "North", category: "A" },
];
const usersData = [
  { name: "Day 1", users: 120, region: "North", category: "A" },
  { name: "Day 2", users: 130, region: "South", category: "B" },
  { name: "Day 3", users: 125, region: "North", category: "A" },
  { name: "Day 4", users: 180, region: "South", category: "B" },
  { name: "Day 5", users: 200, region: "North", category: "A" },
  { name: "Day 6", users: 210, region: "South", category: "B" },
  { name: "Day 7", users: 230, region: "North", category: "A" },
];
const profitData = [
  { name: "Day 1", profit: 1000, region: "North", category: "A" },
  { name: "Day 2", profit: 1200, region: "South", category: "B" },
  { name: "Day 3", profit: 900, region: "North", category: "A" },
  { name: "Day 4", profit: 1500, region: "South", category: "B" },
  { name: "Day 5", profit: 1600, region: "North", category: "A" },
  { name: "Day 6", profit: 1700, region: "South", category: "B" },
  { name: "Day 7", profit: 1800, region: "North", category: "A" },
];
const expensesData = [
  { name: "Day 1", expenses: 500, region: "North", category: "A" },
  { name: "Day 2", expenses: 700, region: "South", category: "B" },
  { name: "Day 3", expenses: 600, region: "North", category: "A" },
  { name: "Day 4", expenses: 800, region: "South", category: "B" },
  { name: "Day 5", expenses: 900, region: "North", category: "A" },
  { name: "Day 6", expenses: 950, region: "South", category: "B" },
  { name: "Day 7", expenses: 1000, region: "North", category: "A" },
];
const pieData = [
  { name: "Product A", value: 40 },
  { name: "Product B", value: 30 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 10 },
];
const salesData30 = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  sales: 4000 + Math.round(Math.random() * 4000),
  region: i % 2 === 0 ? "North" : "South",
  category: i % 3 === 0 ? "A" : "B",
}));
const usersData30 = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  users: 100 + Math.round(Math.random() * 150),
  region: i % 2 === 0 ? "North" : "South",
  category: i % 3 === 0 ? "A" : "B",
}));
const profitData30 = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  profit: 800 + Math.round(Math.random() * 1200),
  region: i % 2 === 0 ? "North" : "South",
  category: i % 3 === 0 ? "A" : "B",
}));
const expensesData30 = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  expenses: 400 + Math.round(Math.random() * 800),
  region: i % 2 === 0 ? "North" : "South",
  category: i % 3 === 0 ? "A" : "B",
}));

export const fetchMockData = async (
  config: VisualizationConfig
): Promise<any[]> => {
  console.log("Fetching mock data with config:", config);
  await new Promise((resolve) => setTimeout(resolve, 500));
  switch (config.metricId) {
    case "sales":
      if (config.timePeriod === "LAST_3_DAYS") return salesData.slice(-3);
      if (config.timePeriod === "LAST_30_DAYS") return salesData30;
      return salesData;
    case "users":
      if (config.timePeriod === "LAST_3_DAYS") return usersData.slice(-3);
      if (config.timePeriod === "LAST_30_DAYS") return usersData30;
      return usersData;
    case "profit":
      if (config.timePeriod === "LAST_3_DAYS") return profitData.slice(-3);
      if (config.timePeriod === "LAST_30_DAYS") return profitData30;
      return profitData;
    case "expenses":
      if (config.timePeriod === "LAST_3_DAYS") return expensesData.slice(-3);
      if (config.timePeriod === "LAST_30_DAYS") return expensesData30;
      return expensesData;
    case "pie":
      return pieData;
    default:
      return salesData;
  }
};
