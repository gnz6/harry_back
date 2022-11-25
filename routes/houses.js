const express = require("express")
const router = express.Router()
const {getHouseData, createHouse, getAllHouses} = require("../controllers/houses")

router.get("/", getAllHouses)
router.get("/:houseName", getHouseData)
router.post("/", createHouse)

module.exports = router