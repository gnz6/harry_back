const mongoose = require("mongoose")

const spellsSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type:String
    },
})

module.exports = mongoose.model("spells", spellsSchema)