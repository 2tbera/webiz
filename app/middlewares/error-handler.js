const {validationResult} = require("express-validator");

/**
 * @description Global error handler
*/    

const  ErrorHandler = (error, req, res, next) =>  {
    res.status(error.status || 500).send({error: true, message: error.message || 'Internal Server Error'})
}

/**
 * @description express-validator error passing middleware
*/    

const throwError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw {status: 400, message: errors.array()}
    }
    next()
}

/**
 * @description HOF wraps functions and handles arrow passing
*/    

const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

module.exports = {ErrorHandler, use, throwError};
