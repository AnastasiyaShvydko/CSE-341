var express = require('express');
var app = express();

app.use('/', require('./routes'));

const port = 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});