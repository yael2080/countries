const mongoose=require('mongoose');
const countrySchema=mongoose.Schema({       
   country:{
       type: String,
       require:true
   },
//    totalConfirmed:{
//        type: String,
//    },
//    totalDeaths:{
//        type:String
//    },
//    totalRecovered:{
//     type:String
//   },
   userId:{
       type: mongoose.Schema.Types.ObjectId, ref:'user'
   }
})
module.exports=mongoose.model('country', countrySchema);
