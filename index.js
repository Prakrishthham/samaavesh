import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import v1 from "./v1/index.js";
import { logs } from "./utils/index.js";

dotenv.config();

const app = express();
const port = process.env.HTTP_PORT || 3000;

const corsOptions = {
  origin: `${process.env.DOMAIN}:${process.env.HTTP_PORT}`, // Replace with your client domain
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(cors(corsOptions));

app.use("/api/v1", v1);
app.use("/media", express.static("media"));

app.listen(port, () => {
  logs.info(`Server running on port ${port}`);
});

export default app;
