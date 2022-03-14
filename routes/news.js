const express = require("express");
const router = express.Router();
const { getNew, listPaginatedNews } = require("../controllers/news");

router.get("/list", async (req, res) => {
  
  try {
    let { from = 0, limit = 10 } = req.query;

    if (isNaN(from) || isNaN(limit) || limit < 0 || from < 0) {
      res.status(400).json({ msg: "Invalid query parameters" });
    }
    from = parseInt(from || 0);
    limit = parseInt(limit || 10);
    const amount = await New.count({ where: { deletedAt: null } });
    console.log(amount);
    // Response if there is no news
    if(amount == 0) return res.status(200).json({ msg:"There is no news", news : [], previousPage: "", nextPage: "" });
    const news = await New.findAll({
      where: { deletedAt: null },
      attributes: ["id", "name", "content", "image", "createdAt", "categoryId"],
      offset: from,
      limit: limit,
    });
    //   console.table({ news });
    let previousPage = 0;
    from - 10 > 0 ? (previousPage = from - 10) : (previousPage = 0);

    // Response: link for previousPage & next page of news
    res.status(200).json({
      previousPage: from > 0 ? `${req.protocol}://${req.get("host")}/news/list/?from=${from - 10 > 0 ? from - 10 : 0}&limit=${limit}` : "",
      nextPage: from + 10 < amount ? `${req.protocol}://${req.get("host")}/news/list/?from=${from + limit}&limit=${limit}` : "",
      news
    });
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
});

router.get("/:id", getNew);
module.exports = router;
