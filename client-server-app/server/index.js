import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({
    origin :[
        //to provide port for Vite app on 5173 and fallback for 5174
        "http://localhost:5173",
        "http://localhost:5174",
        //for giving response to serve on docker on 3000 port
        "http://localhost:3000"

    ]
}));

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from React server" });
});

const port = 4000;

//to resolve port binding issue we can specify the port 
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port http://localhost:${port}`);
});