const router=require("express").Router();
const login = require("../controllers/login");
const country = require("../controllers/country");
const getAllCounties = require("../controllers/getAllCounties");

router.get('/getUser/:email/:password/:name',login.getUser);
router.post('/createUser', login.createUser);
router.get('/getAllUsers',login.getAllUsers);

router.post('/addCountry/:id',country.addCountry);
router.get('/getUserWithCountry/:id',country.getUserWithCountry);
router.get('/deleteCountry/:id',country.deleteCountry);

// router.get('/countries',country.getAllCountries)



module.exports=router