const express =require('express');
const path= require('path');
//Declaring express app.
app=express();

// app config for public folder
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './public/build')));


// handling all requests
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, './public', 'index_prod.html'));
})


// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
