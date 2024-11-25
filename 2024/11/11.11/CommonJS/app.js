const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.get("/users", (req, res) => {
    res.send({
        name: "John Doe",
        age: 30,
        email: "jogndoe@example.com"
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});