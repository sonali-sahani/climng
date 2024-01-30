const express = require("express");

//handle all the route parameter with ease
const router = express.Router();
router.get("/test",(req, res)=>{

    res.send("test api route is working fine")
})

//@route GET api/books
//@description give all the books 
//@access public
//READ operation
router.get('/',(req, res)=>{

// Patient.find()
//.then((patient) => res.json(patient))
res.json({OK: "all patients are there"})

//.catch((err) => res.status(404).json({ nopatientsfound: 'No Patients found' }));
});
//@route GET api/patients/:id
//description Get single patient by id 
//@access Public
router.get('/:id', (req, res) => {
   // Patient.findById(req.params.id)
     // .then((patient) => res.json(patient))
      //.catch((err) => res.status(404).json({ nopatientfound: 'No Patient found' }));
      res.json({ ok: "All patient routes is working fine"})
  });

  // @route GET api/patients
// @description add/save patient
// @access Public
//CREATE operation
router.post('/', (req, res) => {
   // Patient.create(req.body)
     // .then((patient) => res.json({ msg: 'Patient added successfully' }))
      //.catch((err) => res.status(400).json({ error: 'Unable to add this patient' }));
      res.json({ ok: "All patient routes are working fine"})
  });

  // @route GET api/patients/:id
// @description Update patient
// @access Public
//READ,UPDATE,SEARCH operation
router.put('/:id', (req, res) => {
   // Patient.findByIdAndUpdate(req.params.id, req.body)
     // .then((patient) => res.json({ msg: 'Updated successfully' }))
      //.catch((err) =>
       // res.status(400).json({ error: 'Unable to update the Database' })
       res.json({ ok: "Update the patient By Id is successfully"})
  });

  // @route GET api/patients/:id
// @description Delete patient by id
// @access Public
//READ,DELETE,SEARCH operation
router.delete('/:id', (req, res) => {
   // Book.findByIdAndRemove(req.params.id, req.body)
     // .then((patient) => res.json({ mgs: 'Patient entry deleted successfully' }))
      //.catch((err) => res.status(404).json({ error: 'No such a patient' }));
      res.json({ ok: "Delete the patient  Id is successfully"})
  });
module.exports = router;
