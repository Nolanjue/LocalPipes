const express = require('express');
const cors = require('cors');
const port = 8000


const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('hello world')
})



app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})