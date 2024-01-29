const express = require("express");
//handle all the route parameter with ease
const router = express.Router();
router.get("/test",(req, res)=>{

    res.send("test api route is working fine")
})
//@route GET api/books
//@description give all the books 
//@access public
router.get('/',(req, res)=>{
// Patient.find()
//.then((patient) => res.json(patient))
res.json({OK: "all patients are there"})
//.catch((err) => res.status(404).json({ nopatientsfound: 'No Patients found' }));
});

module.exports = router;
