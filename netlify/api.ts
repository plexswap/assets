
import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello Investor! Are You Ready?"));

api.use(express.static('public'), router);

export const handler = serverless(api);