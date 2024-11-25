// import { atlaspass } from './pass.js';

import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';  
const PORT = 3000;
const app = express();
// const uri = ...
const uri = "mongodb+srv://123ayc:hog7kQj6Y8ke83eN@cluster0.16jgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err.message);
});

 


// const { MongoClient, ServerApiVersion } = require('mongodb');


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


app.get("/", (_req, res) => {
    res.send("Hellooo from the server");
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});