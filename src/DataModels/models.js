const mongoose = require("mongoose");

//creating country schema
const countrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
      type:["Polygon"],
      coordinates:[[[Number]]]
    }
  });
        // coordinates: [
            // [30.310951193040808, 81.37460819462547],
            // [30.425901214251724, 81.69321171025047],
            // [29.210632574831667, 84.00034061650047],
            // [27.900707456257148, 86.45029178837547],
            // [27.785348438212374, 88.04880253056297],
            // [26.53542222755802, 88.15317264775047],
            // [26.384045676028197, 87.30035892704734],
            // [26.625992907374414, 85.92020145634422],
            // [26.788998625018124, 85.15527836064109],
            // [27.459855339311506, 84.21457401493797],
            // [27.529137267979, 82.76849857548484],
            // [28.52904215804114, 80.79507938603172],
            // [28.833175700533882, 80.10500065068015],
            // [29.443040189967366, 80.33777347782859],
            // [30.25825481079058, 80.72435489872703]
        // ]
//creating collections for country using models
const Country = new mongoose.model("Country", countrySchema);
//creating district Schema
const districtSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
      type:["Polygon"],
      coordinates:[[[countrySchema]]]
    }
  }); 
// creating the collections for District using Model
const District = new mongoose.model("District", districtSchema);
//creating citySchema
const citySchema = new mongoose.Schema({
    name:{
      type :String,
      required:true
    },
    location:{
      type:["Point"],
      coordinates:[[[districtSchema]]]
    }
  });
    // creating collections for city using models
const City = new mongoose.model("City", citySchema);
module.exports = { Country, District, City };
