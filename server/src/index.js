import dotenv from "dotenv";
import connectDB from "./db/connection.js";

import { app } from "./app.js";
dotenv.config();

// Start The Express

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
