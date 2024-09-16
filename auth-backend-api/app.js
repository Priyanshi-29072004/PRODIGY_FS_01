const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRouter = require("./routes/auth");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose
  .connect("mongodb://localhost:27017/prodigy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use the routers
app.use("/api", authRouter);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
