import express from "express";
import middleware from "./middleware/middleware";

const app = express();

app.use(middleware); //App middleware

export default app;

/* This is the main Express config file */
