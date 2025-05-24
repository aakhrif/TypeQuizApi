// types.ts
export type _ENV = "DEV" | "STAGING" | "PROD" | string;

export interface CorsOriginCallback {
  (error: Error | null, allow?: boolean): void;
}
