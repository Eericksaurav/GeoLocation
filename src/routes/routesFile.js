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
// router.get("/Country",async(req,res)=>{
//     try {
//         const countryData = await Country.find();
//         console.log(countryData)
//         res.send(countryData);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// })
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
        const options = {
            geometry:{
                $geoIntersects:{
                    $geometry:{
                        type:"Point",
                        coordinates:[87.27848052978516
                            ,
                            26.45674234284815]
                    }
                }
            }
        }
        const resultDist = await District.find(options);
        const name_Dist = await resultDist[0].name;
        const cooDist = await resultDist[0].geometry[0].coordinates;
        const countryFlag = {
            geometry:{
                $geoIntersects:{
                    $geometry:{
                        type:"Polygon",
                        coordinates:cooDist
                    }
                }
            }
        }
        const resultCountry = await Country.find(countryFlag);
        const name_Country = await resultCountry[0].name;
        const id_Country = await resultCountry[0].country_id;
        // const resultCount = await Country.find(resultDist);
        // console.log("resultDist ==",resultDist);
        // const objDist = JSON.parse(resultDist);
        // console.log(JSON.parse(resultDist));
        // console.log("nameofDist==",name_Dist);
        // console.log("latlng == ",cooDist);
        res.status(200).send({name_Dist,name_Country,id_Country});
    } catch (error) {
        res.send(error);
    }
})
module.exports = router;