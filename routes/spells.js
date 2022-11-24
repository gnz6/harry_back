const express = require("express")
const router = express.Router()
const {getAll, getOne} = require("../controllers/spells")

router.get("/", getAll)
router.get("/:spell_id", getOne)

module.exports = router