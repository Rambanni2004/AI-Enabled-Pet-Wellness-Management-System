import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";

import adminRoutes from "./routes/adminRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/admin", adminRoutes);

app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
