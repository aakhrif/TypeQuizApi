import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import { corsOptions } from "./corsOptions";
import quizRoutes from './quiz.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', quizRoutes);

app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
