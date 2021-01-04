const express = require("express");
// The path is relative to the root directory of the project
const port = 6942;

const app = express();
app.listen(port, () => console.log("Listening on port", port, "(·_· )"));
app.use(express.static("client/pages/"));
app.use(express.json({ limit: "1mb" }));
