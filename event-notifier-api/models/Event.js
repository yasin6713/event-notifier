const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    phoneN:{
        type:Number
    },
    email:{
        type:String
    },
    provence:{
        type:String
    }
},{timestamps:true})

const Event = mongoose.model("Event",personSchema)

module.exports = Event