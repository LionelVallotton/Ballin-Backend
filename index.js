const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const dispatcher = require('./routes/dispatcher');
const cors = require('cors');

const app = express();

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected")).catch(() => console.log("Database connection failed"))  //, () => console.log("Database connected"))

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

app.use(cors());
app.use(express.json());
app.use('/statistics', dispatcher);

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})