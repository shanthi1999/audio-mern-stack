const express = require("express");

const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 9000;

const DB_URL ="mongodb+srv://chat:chat@cluster0.zupza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:false});
const connectDB = mongoose.connection

connectDB.on('open',()=>{
    console.log("Db connected")
})

app.use(express.json());

app.listen(PORT, () => {
  console.log(`port connected ${PORT}`);
});


app.use('/api',routes)