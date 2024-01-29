const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const patients= require("./routes/api/patients");

//Connect to mongodb
//connectDB();

const app = express();
//Enabling CORS here for saftey of access into from other domains
app.use(cors());

//Handle JSON parsing properly
app.use(express.json({
   extend: false
}))
//use the api group instead of muliple path for multiple routes
app.use("/api/patients", patients)
const port = process.env.PORT || 5000;
app.listen(port, () =>
console.log(`server is running on port ${port}`)
   );  