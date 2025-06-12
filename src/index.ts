import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import { corsOptions } from "./libs/corsOptions";
import quizRoutes from './routes/quiz.routes';
import { swaggerUiServe, swaggerUiSetup } from './docs/swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', quizRoutes);
app.use('/api-docs', swaggerUiServe, swaggerUiSetup);

app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
