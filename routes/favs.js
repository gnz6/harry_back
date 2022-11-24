const express = require("express");
const router = express.Router();
const { deleteFav, addFav } = require("../controllers/favs")

router.put("/:id", addFav)
router.delete("/:id", deleteFav)

module.exports = router;
