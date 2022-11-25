const {charactersModel, houseModel} = require("../models")


const getAllHouses = async(req,res)=>{
    try {
        const houses = await houseModel.find()
        return res.status(200).send(houses)
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:error})       
    }
}

const getHouseData = async(req,res)=>{
    const {houseName} = req.params;
    try {
        const houseCharacters = await charactersModel.find({house:houseName})
        const house = await houseModel.find({name : {$in: houseName}})
        console.log(house)
        // console.log(houseName)
        if(houseCharacters.length){
            const houseStaff = houseCharacters.filter(c=>c.hogwartsStaff !== true)
            const houseStudents = houseCharacters.filter(c=>c.hogwartsStaff === true)
            const response = {house:house , staff : houseStaff, students : houseStudents}
            return res.status(200).send(response)
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: error})
    }
}


const createHouse = async(req,res)=>{
    const {name, description, image, founder, houseColor, animal} = req.body;
    const house = {name, description, image, founder, houseColor, animal}
    try {
        const exists = await houseModel.findOne({name})
        if (!exists){
            await houseModel.create(house)
            return res.status(200).json({house})
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:error})
    }
}


module.exports = {getHouseData, createHouse, getAllHouses}