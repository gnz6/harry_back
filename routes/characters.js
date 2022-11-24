const express = require("express")
const router = express.Router()
const {getAll, getOne} = require("../controllers/characters")

router.get("/", getAll)
router.get("/:character_id", getOne)

module.exports = router