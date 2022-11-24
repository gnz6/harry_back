const {spellsModel} = require("../models")
const axios = require("axios")

const getAll = async(req,res)=>{
    const db = await spellsModel.find()
    if(db.length) return res.status(200).send(db)
    try{
    const apiUrl = await axios.get("https://hp-api.herokuapp.com/api/spells")
    const response = apiUrl.data.map(c=>{
        return {
            name: c.name,
            description: c.description,
        }
    })
    await spellsModel.insertMany(response)
    res.send(response)
    }catch(error){
        console.log(error)
        return res.status(400).json({message: "Cant find spells"})
    }
}

const getOne = async(req,res)=>{
    const {spell_id} = req.params
    try {
        if(!spell_id) return res.status(400).json({message: "Missing ID"})
        const spell = await spellsModel.findById(spell_id)
        if(!spell) return res.status(400).json({message: "Cant find this spell"})
        return res.status(200).send(spell)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "Cant find spell"})
    }
}


module.exports = {getAll, getOne}