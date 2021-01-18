require("dotenv-flow").config();
require("./db/init");

const express = require("express");
const port = 6942;

const app = express();
app.listen(port, () => console.log("Listening on port", port, "(·_· )"));

app.use(express.static("client/"));
app.use(express.json({ limit: "1mb" }));
app.set("view engine", "ejs");
app.set("views", "views");

const softwares = require("./softwares");
app.get("/", (_req, res) => res.render("index", { softwares }));

const route = name => require(`./routes/${name}`);
// ROUTE PROBLEM DETECTED: Hyperlinks don't work properly in these routes
app.use("/news", route("news"));
app.use("/software", route("software"));

/*
app.get("/:anything", (_req, res) => {
  res.status(404);
  res.render("oof-404");
  res.end();
})
*/