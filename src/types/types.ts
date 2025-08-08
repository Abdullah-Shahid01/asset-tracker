export type AssetBreakdownItem = { name: string; value: number; color?: string };
export type SeriesItem = { name: string; assets: number; liabilities: number };
export type AssetData = {
  totalAssets: number;
  totalLiabilities: number;
  netAssets: number;
  lastUpdated: string;
  assetBreakdown: AssetBreakdownItem[];
  monthlySeries: SeriesItem[];
};
