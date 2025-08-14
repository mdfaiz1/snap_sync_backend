import { app } from "./src/server.js";
import { connectDB } from "./src/lib/db.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log("Error in Server Connection", error);
  });
