require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const {ErrorHandler} = require('./middlewares/error-handler')

const main = async () => {

    app.use(express.json());
    app.use(cors());

    /**
     * @description API user Route @header authorization
        * @userData GET
    */    
    app.use('/api', require('./routes/api'));

    /**
     * @description Global Error Handler Middleware
    */   
    app.use(ErrorHandler);

    const server = app.listen(port, () => {
        console.log('ExpressJS project Runs In : ');
    });
}

main()
