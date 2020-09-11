import Express from 'express';
import Helmet from 'helmet';
import Cors from 'cors';
import Mongoose from "mongoose";
import ItemRoute from "./routes/items";

const server = Express();

//  middleware
server.use(Express.json());
server.use(Helmet());
server.use(Cors());


// insert routes here
server.use("/",ItemRoute);

const DB_CONNECTION = "mongodb://root:rootpassword@0.0.0.0:27017"

Mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true },(error) => {
    if(error){
        console.log(error);
        console.log("Failed to connect to MongaDb");
    } else {
        console.log("conected to db");
    }
});

server.get("/",(req,res) => {
    res.send("server is running ")
});

export default server;