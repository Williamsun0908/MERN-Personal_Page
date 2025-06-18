import express from "express"
import writingRoutes from "./routes/writingRoutes.js"
import { connectDB } from "./config/db.js"
import path from "path"

import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const app = express()
const PORT = process.env.PORT
const __dirname = path.resolve()

connectDB()

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log("We just got a new request.")
    next()
})

if(process.env.NODE_ENV !== "production"){
    app.use(cors({
        origin: "http://localhost:5173"
    }))
}


app.use("/api/writings", writingRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}



app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT)
})
