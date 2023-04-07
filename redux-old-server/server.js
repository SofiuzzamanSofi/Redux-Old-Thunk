import express from "express";
import * as dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

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


// Configure Multer
app.use(fileUpload(({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 }
})))

// cloudinary confit ---
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_version: "v2"
});


const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@cluster0.zwgt8km.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const contentsCollection = client.db("redux-thunk-practice").collection("contents");


const run = async () => {

    try {


        // get content from DATABASE --------
        app.get("/content/:_id", async (req, res) => {
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
            const _id = req?.params?._id;
            if (_id !== "all") {
                const query = { _id: new ObjectId(_id) }
                const data = await contentsCollection.findOne(query);
                if (data) {
                    res.status(200).send({
                        success: true,
                        message: "successfully got data",
                        data: data,
                    })
                }
            }
            else {
                const data = await contentsCollection.find({}).toArray();
                if (data) {
                    res.status(200).send({
                        success: true,
                        message: "successfully got All data",
                        data: data,
                    })
                }
            }
        });


        // image upload --image upload on cloudenary
        app.post("/image-upload", async (req, res) => {
            const file = req.files.file;
            const result = await cloudinary.uploader.upload(file.tempFilePath, {
                public_id: `${Date.now()}`,
                resource_type: "auto",
                folder: "images",
            });
            if (result) {
                res.status(200).send({
                    success: true,
                    message: "successfully host image on cloudinary",
                    data: result?.secure_url,
                })
            }
        })


        // add a content on DB ----
        app.post("/add-content", async (req, res) => {
            const contentInfo = req?.body;
            const result = await contentsCollection.insertOne(contentInfo);
            if (result?.acknowledged) {
                res.status(200).send({
                    success: true,
                    message: "content add on DB",
                    data: result?.insertedId,
                })
            }
        });

        // delete comment on db --
        app.delete("/content/:id", async (req, res) => {
            const result = await contentsCollection.deleteOne({ _id: new ObjectId(req.params.id) });
            if (result.deletedCount > 0) {
                res.status(200).send({
                    success: true,
                    message: "successfully delete this services",
                    data: result
                })
            }
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