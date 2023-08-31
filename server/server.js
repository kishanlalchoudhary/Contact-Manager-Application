const express = require("express");
const connectdb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const dotenv = require("dotenv").config();

connectdb();

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
