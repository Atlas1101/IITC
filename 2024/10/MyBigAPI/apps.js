import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 3000;
app.use(express.json());

import jokes from "./db/jokes.json" assert { type: "json" };
import users from "./db/users.json" assert { type: "json" };
import products from "./db/products.json" assert { type: "json" };

app.get("/api/status", (req, res) => {
    res.send({
        message: "Hello, World!",
        status: "Server is running",
    });
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const jokes = app.get("/api/randomjoke", (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send({ randomJoke, message: "please laugh" });
});

app.post("/api/newjoke", (req, res) => {
    const newJoke = req.body;
    jokes.push(newJoke);

    res.send({ message: "new joke added", newJoke });
});

//app listen allways at the end
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
