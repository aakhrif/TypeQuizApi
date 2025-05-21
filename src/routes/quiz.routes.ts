import { Router, Request, Response } from "express";
import { quizzes } from "../data/mock-data-sample";


const router = Router();

router.get('/quizzes', (req: Request, res: Response) => {
    res.json(quizzes);
});

export default router;
