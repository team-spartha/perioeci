const express = require("express");
const clientDir = "../client/";
const port = 6942;

const app = express();
app.listen(port, () => console.log("Listening on port", port, "(·_· )"));
app.use(express.static(clientDir));
