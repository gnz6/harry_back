const mongoose = require("mongoose")

const characterSchema = new mongoose.Schema({
    name:{
        type: String
    },
    species:{
        type:String
    },
    house:{
        type:String
    },
    dateOfBirth:{
        type:String
    },
    wizard:{
        type:Boolean
    },
    eyeColour:{
        type: String
    },
    hairColour:{
        type: String
    },
    wand:{
        wood:{type:String},
        core:{type:String},
        length:{type:Number},
    },
    patronus:{
        type:String
    },
    hogwartsStaff:{
        type:Boolean
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model("characters", characterSchema)