import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import { corsOptions } from "./corsOptions";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
