const mongoose = require('mongoose');

const propertySchema=new mongoose.Schema({
    propertyID: String, 
    propertyType: {type:String},
    negotiable:{type:String},
    price: {type:Number},
    ownership:{type:String},
    propertyAge:{type:Number},
    propertyApproved:{type:String},
    propertyDescription:{type:String},
    bankLoan:{type:String},
    length:{type:Number},
    breath:{type:Number},
    totalArea:{type:Number},
    areaUnit:{type:String},
    noOfBHK:{type:Number},
    noOfFloor:{type:Number},
    attached:{type:String},
    westernToilet:{type:String},
    furnished:{type:String},
    carParking:{type:String},
    lift:{type:String},
    electricity:{type:String},
    facing:{type:String},
    name:{type:String},
    mobile:{type:Number,minLength:10,maxLength:10},
    postedBy:{type:String},
    saleType:{type:String},
    featuredPackage:{type:String},
    PPDPackage:{type:String},
    email:{type:String},
    city:{type:String},
    area:{type:String},
    pincode:{type:Number,minLength:6,maxLength:6},
    address:{type:String},
    landmark:{type:String},
    latitude:{type:String},
    longitude:{type:String}
})

const propertyModel=mongoose.model("property",propertySchema);

module.exports=propertyModel;