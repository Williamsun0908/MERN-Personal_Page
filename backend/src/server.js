import express from "express"
import writingRoutes from "./routes/writingRoutes.js"
import { connectDB } from "./config/db.js"

import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const app = express()
const PORT = process.env.PORT

connectDB()

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log("We just got a new request.")
    next()
})
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use("/api/writings", writingRoutes)

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT)
})
