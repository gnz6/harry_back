const {charactersModel} = require("../models")
const axios = require("axios")

const getAll = async(req,res)=>{
    const db = await charactersModel.find()
    if(db.length) return res.status(200).send(db)
    try{
    const apiUrl = await axios.get("https://hp-api.herokuapp.com/api/characters")
    const response = apiUrl.data.map(c=>{
        return {
            name: c.name,
            species: c.species,
            house : c.house,
            dateOfBirth: c.dateOfBirth,
            wizard : c.wizard,
            eyeColour: c.eyeColour,
            hairColour: c.hairColour,
            wand: c.wand,
            patronus : c.patronus,
            hogwartsStaff: c.hogwartsStaff,
            image: c.image,
        }
    })
    await charactersModel.insertMany(response)
    res.send(response)
    }catch(error){
        console.log(error)
        return res.status(400).json({message: "Cant find characters"})
    }
}

const getOne = async(req,res)=>{
    const {character_id} = req.params
    try {
        if(!character_id) return res.status(400).json({message: "Missing ID"})
        const character = await charactersModel.findById(character_id)
        if(!character) return res.status(400).json({message: "Cant find this character"})
        return res.status(200).send(character)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "Cant find character"})
    }
}


module.exports = {getAll, getOne}