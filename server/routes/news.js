const express = require("express");
const router = express.Router();
const YAML = require("yaml");
const path = require("path");
const { readFileSync } = require("fs");

router.use(express.static("client/"));

router.route("/:article")
  .get((req, res) => {
    const filepath = path.resolve(__dirname, `../news-articles/${req.params.article}.yml`);
    try {
      const newsArticle = YAML.parse(readFileSync(filepath, "utf8"));
      res.render("news-article", { newsArticle });
    } catch (e) {
      res.status(404);
      res.render("oof-404");
    }
    res.end();
  })

module.exports = router;