
const dotenv= require("dotenv")
const express = require("express");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send("Api is running successfully");
});

app.get('/api/chat',(req,res)=>{
    res.send(chats);
});
app.get('/api/chat/:id',(req,res)=>{
    const singleChat=chats.find(c=>c._id===req.params.id);
    res.send(singleChat)
})

const PORT = process.env.PORT || 8000;
app.listen(8000,console.log(`Server Startted at port ${PORT}`))