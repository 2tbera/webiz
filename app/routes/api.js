const express = require("express");
const router = express.Router();
const {api} = require('../controllers/api');
const {use, throwError} = require("../middlewares/error-handler");

const cache = require("../../ruteCache");
const { query } = require("express-validator");

router.get("/quote",
    query('from_currency_code').isString(),
    query('from_currency_code').isLength({min: 1}),
    query('amount').isLength({min: 1}),
    query('amount').optional().isInt(),
    query('to_currency_code').isString(),
    query('to_currency_code').isLength({min: 1}),
    throwError,
    cache,
    use(api));


module.exports = router;
