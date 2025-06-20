# BI Dashboard POC (DevExtreme + React + Vite)

This is a modular, decoupled React + TypeScript proof-of-concept BI dashboard using Vite, DevExtreme, and TanStack React Query.

## Features
- Dashboard-level filters (global time period) that control all charts
- DevExtreme charts (bar)
- Modular, reusable components
- Mock data adapter for demonstration

## Folder Structure
```
src/
├── components/
│   ├── bi-ui-kit/
│   │   └── ChartWidget.tsx
│   └── filters/
│       └── TimePeriodSelector.tsx
├── hooks/
│   └── data-adapters/
│       ├── mock.adapter.ts
│       └── useVisualizationData.ts
└── pages/
    └── MyDashboardPage.tsx
```

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Notes
- DevExtreme is used in trial mode for this POC.
- All data is mocked for demonstration purposes.
# biv-devextreme
