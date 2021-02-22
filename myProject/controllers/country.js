const Country = require ('../models/country');
const User = require('../models/user');

const addCountry = async (req, res) => {
    console.log('body on addCountry:',req.body)
    // const id = req.params.id
    
    const user = await User.findById( req.params.id)
    console.log('user on addCountry:',user)
    try {
    const newCountry = new Country(req.body.data)
console.log('new country on addCountry',newCountry)
        await newCountry.save()
        await user.countries.push(newCountry)
        await user.save()
        res.status(200).json(newCountry)
    }
    catch (err) {
      console.log('error on addCountry',err)
        res.status(400).send(err)
    }
}


const getUserWithCountry = async (req, res) => {
  console.log(req.params.id)
  try {
      const user = await User.findById(req.params.id).populate('countries')
      res.status(200).json( user )
      console.log(user);
  } catch (err) {
      res.status(400).send(err)
  }
}
// }
// const getUserWithCountry=async (req,res)=>{
//   try{
//       let country=await Country.find().populate({path:'user',matc:{_id: req.params.id}});     
//       res.status(200).json({"country":country})   
//   }
//   catch(error){
//       res.status(500).json({"error":error.message})
//   }   
// }

  const deleteCountry= (req,res)=>
 {
console.log(req.params.id)
Country.findByIdAndDelete(req.params.id,function(err,country){
  if(err)
  res.status(400).send('error')
  else{
    if(country)
    res.status(200).json({myCountry: country, massage: 'country delete'})
    else
    res.send('nod exist')
  }
})
// const getCountries = async (req, res) => {
 
//   try {
//       const country = await user.findById({ name: req.query.id})
//       res.status(200).json( country)
//   } catch (err) {
//       res.status(400).send(err)
//   }
// }

}
//getCountries
module.exports = { deleteCountry, getUserWithCountry,addCountry}