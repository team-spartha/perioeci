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
const { sortObj } = require("./helpers");
app.get("/", (_req, res) => res.render("index", {
  softwares: sortObj(
    softwares,
    ([_ka, sa], [_kb, sb]) => (sa.info.downloads < sb.info.downloads) ? 1 : -1
  )
}));

const route = name => require(`./routes/${name}`);

app.use("/news", route("news"));
app.use("/software", route("software"));

app.get("/:anything", (_req, res) => {
  res.status(404);
  res.render("oof-404");
  res.end();
});