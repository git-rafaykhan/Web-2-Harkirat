const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ilovecoding";

app.listen(3000, () => {
    console.log("app is listening");
});

// Middlewares
app.use(express.json()); 

// Routes
const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post('/signup', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    
    users.push({
        userName: userName,
        password: password, 
    });

    console.log(users);
    res.json({
        userName, password
    });
});

app.post('/signin', (req, res) => {
   const {userName, password} = req.body;
   let findUser=  users.find(u => (u.userName == userName && u.password == password))
   if(findUser){
    
    // const token = generateToken();
    
    const token = jwt.sign({
        userName : findUser.userName
    }, JWT_SECRET);

    findUser.token = token;
    console.log(findUser);
    res.json({
        "meassage": "user has found "
    })
    console.log(findUser.userName);
   }else {
    res.json({
        "message" : "user not found"
    });
   }
});

app.get('/me', (req, res)=> {
    const tokenHeader = req.headers.token;

    const verify = jwt.verify(tokenHeader, JWT_SECRET);

    const findUser = users.find(u => (u.userName == verify.userName));

    console.log(findUser);

    if(findUser){
        res.json({
            "message" : "you are signed in "
        })
    }else {
            res.status(404).send({
                "message" : "unauthorized"
            })
    }
})