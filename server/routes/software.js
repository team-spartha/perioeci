const express = require("express");
const router = express.Router();
const softwares = require("../softwares");
const { readdirSync } = require("fs");

router.use(express.static("client/"));

router.route("/:software")
  .get((req, res) => {
    try {
      const software = softwares[req.params.software];
      if (!software) throw new Error("not found");
      software.screenshots = readdirSync(`client/resources/screenshots/${software.name}`)
        .map(filename => `resources/screenshots/${software.name}/${filename}`);
      res.render("software", { software });
    } catch (e) {
      res.status(404);
      res.render("oof-404");
    }
    res.end();
  });

module.exports = router;