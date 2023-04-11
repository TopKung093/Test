const express = require('express');
const app = express();
const port = 3000;
const DATA_URL = 'mongodb+srv://admin:1234@cluster0.ucxyqbu.mongodb.net/shop'
const mongoose = require('mongoose')
const data = require('../Test/model/medic')

require('dotenv').config();
app.get('/get', async (req, res) => {
    try {
        const Data = await data.find()
        console.log(Data)
        res.json(MedicData)
    } catch {
        console.log('err')
    }
});
mongoose.connect(DATA_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Database connect");
    })
    .catch((error) => {
        console.log("Error");
    })
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});