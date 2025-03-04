const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "aliogochukwu06@gmail.com",
        current_datetime: new Date().toISOString(),
        githuh_url: "https://github.com/Ali-Peter/user-api"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})