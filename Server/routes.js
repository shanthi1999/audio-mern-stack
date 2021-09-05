const express = require('express');
const audio = require('./audioSchema')
const routes = express.Router();

routes.post('/audio',async(req,res)=>{
    const audioSchema =  new audio(req.body)
    try{
       const results =  await audioSchema.save()
        res.json({status:true,result:results})
    }
    catch(err){
        res.json({status:false,result:err})
    }
})

routes.get('/sendAudio',async(req,res)=>{
    try{
     const audios = await audio.findById(req.body.id);
     res.json({status:true,result:audios})
    }
    catch(err){
        res.json({status:true,result:err})
    }
})

module.exports = routes;