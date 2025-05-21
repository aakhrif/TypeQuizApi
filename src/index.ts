import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const DEV = "DEV";
type _WILDCARD = "*";
const WILDCARD: _WILDCARD = "*";

const ALLOWED_STAGING_ORIGINS = ["https://staging.example.com"];
const ALLOWED_PROD_ORIGINS = ["https://example.com"];

const ENV = process.env.ENVIRONMENT ?? DEV;

const originAllowList: Readonly<Record<string, string[] | _WILDCARD>> = {
    DEV: WILDCARD,
    STAGING: ALLOWED_STAGING_ORIGINS,
    PROD: ALLOWED_PROD_ORIGINS
};

const corsOptions: cors.CorsOptions = {
    origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
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

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
