import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./routes/userRoute";
const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use("/api/users", userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world")
})

app.listen(3000, () => {
    console.log("server started at port 3000");
})
