const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const JWT_SSECRET = "ilovecoding";

app.listen(3000, ()=> {
    console.log("App is listening ");
});

app.use(express.json());
const users = [];

app.get("/", (req, res)=> {
    res.sendfile(__dirname + "/public/index.html");
})

app.post("/signup", (req, res)=> {
    const {username, password} = req.body;

    users.push({
        username, password
    });

    res.json({
        message: "you have been signed up", 
        username, password
    });
    console.log(users);
});

app.post("/signin",(req, res)=> {
    const {username, password} = req.body;
    
    const findUser = users.find(u=> (u.username == username && u.password == password));

    if(!findUser){
        res.json({
            message : "crediantals are not correct"
        })
    }else{
        const token = jwt.sign({
            username: findUser.username
        }, JWT_SSECRET)
        findUser.token = token;
        console.log(findUser);
        res.send({
            message : "user has been sign in",
            token
        })
    }
    
});

function auth(req, res, next){
    const token = req.headers.token;
    const foundUser = users.find(u=> (u.token == token));
    const verify = jwt.verify(token, JWT_SSECRET);
    if(foundUser.username == verify.username){
        req.username = verify.username;
        next();
    }else{
        res.json({
            message: "invalid token"
        })
    }
}

app.get("/me",auth, (req, res)=> {
    const username = req.username 
    console.log(username);
});