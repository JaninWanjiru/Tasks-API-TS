import express from 'express';

const app = express()

app.get("/", (_req, res) => {
    res.send("<h1>You've unlocked the Tasks API in Ts and Express</h1> ")
})



const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`App running on port ${port}`));