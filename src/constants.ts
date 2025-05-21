export const DEV = "DEV";
export type _WILDCARD = "*";
export const WILDCARD: _WILDCARD = "*";

export const ALLOWED_STAGING_ORIGINS = ["https://staging.example.com"];
export const ALLOWED_PROD_ORIGINS = ["https://example.com"];

export const ENV = process.env.ENVIRONMENT ?? DEV;

export const originAllowList: Readonly<Record<string, string[] | _WILDCARD>> = {
    DEV: WILDCARD,
    STAGING: ALLOWED_STAGING_ORIGINS,
    PROD: ALLOWED_PROD_ORIGINS
};