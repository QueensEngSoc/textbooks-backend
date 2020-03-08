const mongoose =require('mongoose');
const PostSchema = mongoose.Schema({
book_name:{
    type:String,
    required:true
},
book_image:{
    data: Buffer, 
    contentType: String 
},
book_course:{
    type:String,
    required:true
},
book_description: {
    type:String,
    required:true
},

book_condition: {
    type:String,
    required:true
},

book_price: {
    type:String,
    required:true
},
book_status: {
    type:String,
    required:true
},
contact_name: {
    type:String,
    required:true
},
contact_number: {
    type:String,
    required:true
},
contact_email: {
    type:String,
    required:true
},
publish_date:{
    type:Date,
    default:Date.now
}
});
 module.exports=mongoose.model('Posts',PostSchema);
