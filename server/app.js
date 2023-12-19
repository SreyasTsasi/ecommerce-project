import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import conn from "./connection.js";
import router from "./router.js";

dotenv.config();

const port = process.env.VITE_PORT;
const app = express();

app.use(cors());
app.use(express.json({
    limit: "5mb"
}))
app.use(express.static(path.resolve("./dist")));
app.use("/api", router);
app.get("/*",(_req, res) => {
    return res.sendFile(path.resolve("./dist/index.html"));
})
app.all("/*",(_req, res) => {
    return res.status(404).json({
        msg: "Not found!"
    })
})

conn().then(() => {
    app.listen(port, (error) => {
        if(error) {
            return console.log(error);
        }
        console.log(`>Server started on port: ${port}`);
    })
})
.catch(error => {
    console.log(error);
})