const express = require("express");
require("dotenv").config();
const { connectDB } = require("./config/db.config");
const tweetRoutes = require("./routes/tweetRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());
const morgan = require("morgan");
app.use(morgan("dev"));

const port = process.env.PORT || 5000;

app.use(cors());

connectDB(
  "mongodb+srv://code11:code11@cluster0.6vszo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.use("/api/tweets", tweetRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
