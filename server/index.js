require("dotenv-flow").config();
require("./db/init");

const express = require("express");
const port = 6942;

const app = express();
app.listen(port, () => console.log("Listening on port", port, "(·_· )"));
// The path is relative to the root directory of the project
app.use(express.static("client/"));
app.use(express.json({ limit: "1mb" }));