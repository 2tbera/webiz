require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const {ErrorHandler} = require('./middlewares/error-handler')

app.use(express.json());
app.use(cors());

/**
 * @description routes 
*/    
app.use('/api', require('./routes/api'));

/**
 * @description Global Error Handler Middleware
*/   
app.use(ErrorHandler);

app.listen(port, () => {
    console.log('ExpressJS project Runs In : ');
});