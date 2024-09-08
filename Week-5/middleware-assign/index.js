const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log("app is listening"); 
});

function middleMan(req, res, next) {
    let name = req.query.name;
    if(name && name !== "") {
        next();  // Proceed to the next middleware or route handler
    } else {
        console.log("You are not allowed to proceed");
        res.status(403).send("Forbidden: You are not allowed to proceed");  // Send a response with a 403 Forbidden status
    }
}

app.get("/demo", middleMan, (req, res) => {
	let {name} = req.query;
    res.send(`hello ${name}`);
});  
