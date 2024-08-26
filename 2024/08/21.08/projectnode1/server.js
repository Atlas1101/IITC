const express = require('express');

const app = express();


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    
});


app.get('/',(req, res)=> {
    res.send('Welcome broooooo to my basic Express server broooo!!!');
});


app.get('/about',(req, res)=> {
    res.send('My name isnt important right now broo. All you need to know is this server was created by me, brooo');
});

app.get('/contact',(req, res)=> {
    res.json('email me brooo. my email is broo@bromail.bro');
});


app.get('/',(req, res)=> {
    res.send('api/products');
});


