import express from "express";
import { router } from "./routes";
import path from "path";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.set(" view engine", "ejs");
app.use(express.static("src/public"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.use(router);

app.listen(3000, () => { console.log('iniciado...'); });

