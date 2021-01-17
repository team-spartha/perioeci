const express = require("express");
const router = express.Router();
const YAML = require("yaml");
const path = require("path");
const { readFileSync } = require("fs");

router.use(express.static("client/"));

router.route("/:software")
  .get((req, res) => {
    const filepath = path.resolve(__dirname, `../software-pages/${req.params.software}.yaml`);
    try {
      const software = YAML.parse(readFileSync(filepath, "utf8"));
      res.render("software", { software });
    } catch (e) {
      res.status(404);
      res.render("oof-404");
    }
    res.end();
  })

module.exports = router;