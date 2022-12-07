const express = require("express");
const router = express.Router();
const {api} = require('../controllers/api');
const {use, throwError} = require("../middlewares/error-handler");
const cache = require("../middlewares/cache");
const { query } = require("express-validator");

/**
 * @description GET METHOD EXPECTS PARAMS
 *  @from_currency_code Type string , length 3
 *  @amount Type number 
 *  @to_currency_code Type string , length 3
*/    

router.get("/quote",
    query('from_currency_code').isString(),
    query('from_currency_code').isLength({min: 3, max: 4}),
    query('amount').isLength({min: 1}),
    query('amount').isFloat(),
    query('to_currency_code').isString(),
    query('to_currency_code').isLength({min: 3, max: 4}),
    throwError,
    cache,
    use(api));


module.exports = router;
