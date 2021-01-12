require("dotenv-flow").config();
require("./db/init");

const express = require("express");
const port = 6942;

const app = express();
app.listen(port, () => console.log("Listening on port", port, "(·_· )"));
// The path is relative to the root directory of the project
app.use(express.static("client/"));
app.use(express.json({ limit: "1mb" }));

app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", (_req, res) => {
  res.render("index", {
    page_title: "Perioeci Market",
    //icon_user: "resources/icons/account.png"
  });
})

app.get("/header", (_req, res) => {
  res.render("header", { icon_user: "resources/icons/account.png" });
})