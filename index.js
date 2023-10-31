const express = require('express');

const app = express();

app.get("/",(req,resp)=>{
    resp.send("app is working nice. I love it")
});

app.listen(5000)