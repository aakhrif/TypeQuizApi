// corsConfig.ts
import cors from "cors";
import { WILDCARD, originAllowList } from "./constants";
import type { CorsOriginCallback } from "./types";

const ENV = process.env.ENVIRONMENT ?? "DEV";

export const corsOptions: cors.CorsOptions = {
  origin: (origin: string | undefined, callback: CorsOriginCallback) => {
    const allowed = originAllowList[ENV];

    if (allowed === WILDCARD) {
      return callback(null, true);
    }

    if (Array.isArray(allowed) && origin && allowed.includes(origin)) {
      return callback(null, true);
    }

    console.warn(`Blocked CORS request from origin: ${origin}`);
    return callback(new Error("Not allowed by CORS"), false);
  }
};
