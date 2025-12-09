import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes/index";
import { initArticleCron } from "./services/article-cron-service";

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

initArticleCron();
app.use("/autoblog/v1", routes);

app.listen(PORT, () => {
    console.log(`SERVER => Server listening on port ${PORT}`);
    console.log(
        `SERVER => Server base rout http://127.0.0.1:3000/autoblog/v1/{route}`
    );
});
