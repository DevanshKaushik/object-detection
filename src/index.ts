import express, { Application } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./routes"

const app: Application = express()
const PORT = (process.env.PORT || 5000) as number

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use("/", router)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
