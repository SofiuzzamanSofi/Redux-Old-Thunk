import express from "express";
import * as dotenv from "dotenv";
import colors from "colors";
import cors from "cors";

// initialized ------
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// middleware -------
app.use(cors());
app.use(express.json());


const run = async () => {
    try {

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