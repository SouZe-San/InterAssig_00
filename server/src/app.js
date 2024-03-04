import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));

app.use(cookieParser());

//routes import
import userRoutes from "./routes/user.routes.js";

//routes declaration
app.use("/api/user", userRoutes);

export { app };
