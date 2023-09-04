const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());

const allowedOrigins = ["http://127.0.0.1:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
