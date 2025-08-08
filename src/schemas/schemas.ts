import { z } from 'zod';

export const AssetBreakdownItemSchema = z.object({
  name: z.string(),
  value: z.number().nonnegative(),
  color: z.string().optional(),
});

export const SeriesItemSchema = z.object({
  name: z.string(),
  assets: z.number().nonnegative(),
  liabilities: z.number().nonnegative(),
});

export const AssetDataSchema = z.object({
  totalAssets: z.number(),
  totalLiabilities: z.number(),
  netAssets: z.number(),
  lastUpdated: z.string(),
  assetBreakdown: z.array(AssetBreakdownItemSchema),
  monthlySeries: z.array(SeriesItemSchema),
});

export type AssetBreakdownItem = z.infer<typeof AssetBreakdownItemSchema>;
export type SeriesItem = z.infer<typeof SeriesItemSchema>;
export type AssetData = z.infer<typeof AssetDataSchema>;
