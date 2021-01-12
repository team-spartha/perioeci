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
      res.render("base-layout", {
        pageTitle: "Erreur 404 - Page non trouvée",
        page: "pages/404",
        commentHead: false,
        args: undefined
      })
    }
    res.end();
  })

module.exports = router;