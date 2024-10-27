import express, { Request, Response }  from "express";
import cors from "cors";
import "dotenv/config";

const app = express()
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.status(200).json({message: "Hello"})
})

app.listen(8800, ()=>{
    console.log("Server run on port 8800");
})