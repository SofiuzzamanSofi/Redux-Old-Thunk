import express from "express";
import * as dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";


// for file read write delete edit ---
import fs from "fs";
import path from "path";

// initialized ------
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// middleware -------
app.use(cors());
app.use(express.json());


// get data from serversite/this site products.json file --
const __dirname = path.resolve();
const productsFilePath = path.join(__dirname, "/", "components", "data", "products.json");





const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@cluster0.zwgt8km.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const contentsCollection = client.db("redux-thunk-practice").collection("contents");









const run = async () => {


    try {
        app.get("/content", async (req, res) => {
            // fs.readFile(productsFilePath, "utf8", (err, data) => {
            //     if (err) {
            //         console.log(err);
            //         return res.status(500).send({
            //             success: false,
            //             message: "somethings wrong happened on file red or json file read.",
            //         })
            //     }
            //     else {
            //         const products = JSON.parse(data);
            //         return res.status(200).send({
            //             success: true,
            //             message: "successfully got data",
            //             data: products,
            //         })
            //     }
            // })

            const data = await contentsCollection.find({}).toArray();
            if (data) {
                res.status(200).send({
                    success: true,
                    message: "successfully got data",
                    data: data,
                })
            }
            // console.log(data);
        })
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Finally clg:".yellow);
    }

};
run().catch(err => {
    console.log(err.bgRed);
});



app.get("/", async (req, res) => {
    res.status(200).send({
        success: true,
        data: `This is REDUX old server running well. Redux Thunk server on port ${port}`,
    })
});

app.listen(port, () => {
    console.log(`Redux old/ Thunk port: ${port}`.bgCyan);
})