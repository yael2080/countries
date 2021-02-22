const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
      type:String, 
      default:"user" 
    },
    password:{
        type:String,
        require:true,
        // minlength:"6",
        trim: true
    },
    email:{
      type: String,
      require: true
    },
    countries:[{
      type: mongoose.Schema.Types.ObjectId, ref: 'country'
    }]
})
module.exports=mongoose.model('user', userSchema);