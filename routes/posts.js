const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
var fs = require('fs');
const path = require('path')


router.get('/',async(req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);}
    catch(err){
        res.json({message:err});
    } 
     });
    

router.get('/:postId',async(req,res)=>{
    try{
   const post=await Post.findById(req.params.postId);
        res.json(post);
}
   catch(err)
   {
    res.json({message:err});

   }
    });
        
    module.exports=router;



   
 router.post('/',async(req,res)=>{
    console.log("Started Posting");
    var post = new Post({
        book_name:req.body.book_name,
        book_course:req.body.book_course,
        book_description:req.body.book_description,
        book_condition:req.body.book_condition,
        book_price:req.body.book_price,
        book_status:req.body.book_status,
        contact_name:req.body.contact_name,
        contact_number:req.body.contact_number,
        contact_email:req.body.contact_email
    });
    try{
        const savedPost= await post.save();
        res.json(savedPost);
    }
    catch(err){
        res.json({message:err});
    }
 });



 router.delete('/:postId',async(req,res)=>{
    try{
   const removed_post=await Post.remove({_id: req.params.postId});
        res.json(removed_post);
}
   catch(err)
   {
    res.json({message:err});

   }
    });

    router.patch('/:postId',async(req,res)=>{
        try{
       const updated_post=await Post.updateOne(
           {_id: req.params.postId}
           ,{$set:{book_name:req.body.book_name} }
        );
            res.json(updated_post);
    }
       catch(err)
       {
        res.json({message:err});
    
       }
        });