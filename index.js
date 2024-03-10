const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("@dotenvx/dotenvx");
config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

/**
 * entry point for express app;
 *
 */
app.listen(port, () => {
  console.log(`Server running on  http://127.0.01:${port}`);
});
