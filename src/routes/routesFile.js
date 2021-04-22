const express = require("express");
const router = new express.Router();
const { Country, District, City } = require("../DataModels/models.js");
//creating express connection
router.post('/Country', async(req, res) => {
    try {
        const data = await Country.insertMany(req.body);
        console.log("Country==",data);
        res.status(201).send(data);
    } catch (error){
        res.status(400).send(error);
    }
});
router.get("/Country",async(req,res)=>{
    try {
        const countryData = await Country.find();
        console.log(countryData)
        res.send(countryData);
    } catch (error) {
        res.status(404).send(error);
    }
})
router.post("/District", async(req, res) => {
    try {
        const data = await District.insertMany(req.body);
        console.log("District==", data);
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
});
router.get("/District",async(req,res)=>{
    try {
        const districtData = await District.find();
        console.log(districtData);
        res.status(200).send(districtData);
    } catch (error) {
        res.send(error);
    }
})
router.post("/City", async(req,res) => {
    try {
        const data = await City.insertMany(req.body);
        console.log("City==", data);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})
router.get("/City",async(req,res)=>{
    try {
        const cityData = await City.find();
        console.log(cityData);
        res.send(cityData);
    } catch (error) {
     res.send(error);   
    }
})
router.get("/cityLoc",async(req,res)=>{
    try {
        // const options = {
        //     location:{
        //         $geoIntersects:{
        //             $geometry:{
        //                 type:"point",
        //                 coordinates:[[27.682755,85.333225]]
        //             }
        //         }
        //     }
        // }
        const result = await District.find();
        console.log("result==",result);
        res.status(200).send(result);
    } catch (error) {
        res.send(error);
    }
})
module.exports = router;