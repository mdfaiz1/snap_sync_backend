import express from "express";
// import dotenv from "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
// import path from "path";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

// import { connectDB } from "./lib/db.js";

const app = express();
// const PORT = process.env.PORT;

// const __dirname = path.resolve();

app.use(
  cors({
    origin: "https://snap-sync-frontend.vercel.app",
    // origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/chat", chatRoutes);

app.get("/", (_, res) => {
  res.send("Server is Running for Snap Sync");
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

export { app };

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   connectDB();
// });
