const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const DB_URL = "mongodb://admin:admin123@ds343718.mlab.com:43718/calculator";
const routes = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(DB_URL, {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.log('Connection failed');
    });

app.use('/api', routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server is listening on the port :', PORT);
});