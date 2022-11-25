const mongoose = require("mongoose")

const houseSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    founder:{
        name:{type:String},
        img:{type:String},
    },
    houseColor:{type:String},
    animal:{type:String}
})

module.exports = mongoose.model("houses", houseSchema)