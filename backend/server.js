const express = require('express')
const app = express()
const mongoose= require("mongoose")
require('dotenv').config()
const routes =require("./routes/TaskRoute")


const cors=require("cors")
const port = process.env.PORT | 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("mongoDB Connected...."))
.catch((err)=>console.log(err));

app.use("/api",routes);



app.listen(port,()=>console.log(`Listening at ${port}`))