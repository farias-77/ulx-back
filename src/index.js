import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";

import router from "./routes/index.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(router);

server.listen(process.env.PORT, () => {
    console.log(
        chalk.magenta(`Server is listening on port ${process.env.PORT}`)
    );
});
