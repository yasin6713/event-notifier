const { response } = require("express")
const Event =require("../models/Event")

const store = (req,res,next)=>{
    let event = new Event ({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phoneN:req.body.phoneN,
        provence:req.body.provence,
        email:req.body.email
    })
    event.save()
    .then(response =>{
        res.json({
            message:'an event saved successfully!'
        })
    })
    .catch(err=>{
        res.json({
            message:'can not save the event!'
        })
    })
}

const list = (req,res,next)=>{
    Event.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message:'cant find the list of event'
        })
    })
}

const show = (req,res,next)=>{
    let eventID = req.body.eventID
    Event.findById(eventID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message:"cant find the item"
        })
    })
}

const update = (req,res, next)=>{
    let eventID = req.body.eventID
    let updateData = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        emial:req.body.email,
        phoneN:req.body.phoneN,
        provence:req.body.provence
    }
    Event.findByIdAndUpdate('Event',{$set:updateData})
    .then(response =>{
        res.json({
            message:'an event updated successfully!'
        })
    })
    .catch(err =>{
        res.json({
            message:"can not update the event"
        })
    })
}

const destroy = (req,res,next)=>{
   let eventID = req.body.eventID
    Event.findByIdAndRemove(eventID)
    .then(response =>{
        res.json({
            message:'delate an event successfully!'
        })
    })
    .catch(err =>{
        res.json({
            message:'can not remove the event!'
        })
    })
}

module.exports = {store,list,show,destroy,update,}

