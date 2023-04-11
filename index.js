const express = require('express');
const app = express();
const port = 3000;
const DATA_URL = 'Database url'
const mongoose = require('mongoose')
const medic = require('../Test/model/medic')

require('dotenv').config();
app.get('/get', async (req, res) => {
    try {
        const MedicData = await medic.find()
        console.log(MedicData)
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