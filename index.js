const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// Serve static files from the public directory
app.use(express.static("public"))
app.use(bodyParser.json()) // enable JSON parsing for request body

app.get("/", (req, res) => {
	res.send("Hello world")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
