const express = require('express');
const app = express();



app.use(express.json());

app.get('/api/:country',(req,res)=>{
    var country =  req.params["country"];
    var capitalizeCount = country.charAt(0).toUpperCase() + country.substr(1);
    res.json({
        country : capitalizeCount,
        independence : true
    });  
});

app.get('/',(req,res)=>{
    res.json({name:"Testing"});
});


app.listen(8080, () =>{
    console.log("Listening");
});