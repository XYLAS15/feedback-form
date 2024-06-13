const express = require("express");
const app = express();
const cors = require("cors");
const contact = require("./routes/contact");

require("./conn/conn");
app.use(express.json());
app.use(cors());
app.use("/api/v1",contact)

app.listen("8080",() =>{
    console.log("Server Started at port 8080");
})