const express = require('express');
const app = express();

app.use(express.json());

const port = 8080;
app.listen(port, ()=> {
    console.log("App is listening");
});

const todos = [
    {
        "id": 0,
        "title": "go to gym"
    },
    {
        "id": 1,
        "title": "go to market"
    }
]

app.get('/', (req, res)=> {
    const result = todos.map(todo => todo.title);
    console.log(result);
    res.send(result);
})

app.post('/', (req, res)=> {
    todos.push(req.body);
    console.log(req.body);
    res.json({});
})

app.put("/", (req, res) => {
    /*
     The user will give {id: 2, title: "go to somewhere"}
     The code will find the todo with the given id and replace the title with the new one
    */

    const todo = todos.find(todo => todo.id === req.body.id);
    if (todo) {
        todo.title = req.body.title;
        res.json({ message: "Todo updated successfully" });
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

app.delete('/', (req, res)=> {
    todos.pop(req.body.id);
    console.log(req.body);
    res.json({});
})