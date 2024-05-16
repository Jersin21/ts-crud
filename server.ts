import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config()

const routes = require("./routes/userRoute")

app.use(cors())

app.get("/", (req, res) => {
  res.send("Express + TypeScript Serverr");
});
app.use(express.json())

 app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`[server]: Server is running ats http://localhost:${port}`);
});