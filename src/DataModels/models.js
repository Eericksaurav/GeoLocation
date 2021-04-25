const mongoose = require("mongoose");

//creating country schema
const countrySchema = new mongoose.Schema({
    country_id:{
      type:Number,
      required:true
    },
    name:{
        type:String,
        required:true
    },
    geometry:{
      type:["Polygon"],
      coordinates:[[[Number]]]
    }
  });
     
//creating collections for country using models
const Country = new mongoose.model("Country", countrySchema);
//creating district Schema
const districtSchema = new mongoose.Schema({
    district_id:{
      type:Number,
      required:true
    },
    name:{
        type:String,
        required:true
    },
    geometry:{
      type:["Polygon"],
      coordinates:[[[Number]]]
    }
  }); 
// creating the collections for District using Model
const District = new mongoose.model("District", districtSchema);
//creating citySchema
const citySchema = new mongoose.Schema({
    city_id:{
      type:Number,
      required:true
    },
    name:{  
      type :String,
      required:true
    },
    geometry:{
      type:["Point"],
      coordinates:[[[Number]]]
    }
  });
    // creating collections for city using models
const City = new mongoose.model("City", citySchema);
module.exports = { Country, District, City };
