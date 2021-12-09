require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const fileUpload = require("express-fileupload")


const connectDB = require("./db/connect");

const productsRouter = require('./routes/productsRouter');
const cartRouter = require('./routes/cartRouter')

const notFoundError = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");


const port = process.env.port || 3000
app.use(express.json())
app.use(fileUpload({useTempFiles: true}))

app.use(express.static('./public'))

app.get('/*', (req, res) => {
    res.send(`<h1>OOPSIE WOOPSIE!! uwU We made a wittle fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!</h1>`)
})
app.use("/api/v1/products", productsRouter)
// app.use("/api/v1/cart", cartRouter)

app.use(notFoundError)
app.use(errorHandlerMiddleware)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`listening @ ${port}`))
    } catch(error) {
        console.log(error);
    }
}

start()