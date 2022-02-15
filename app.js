const express = require('express');
const app= express();
const path=require ('path');
app.use(express.static('public'));

app.listen(3036, ()=>{
    console.log('servidor corriendo en el puerto 3036')
});

app.get('/', (req, res) => {
    let htmlPath=path.join(__dirname,'/views/home.html');
    res.sendFile(htmlPath);
});


app.get('/register', (req, res) => {
    let htmlPath=path.join(__dirname,'views/register.html');
    res.sendFile(htmlPath);
});

app.get('/login', (req, res) => {
    let htmlPath=path.join(__dirname,'views/login.html');
    res.sendFile(htmlPath);
});
 
