const NodeCache = require('node-cache');
const cache = new NodeCache();

/**
 * @description Ceche Middleware 
*/    
module.exports = async (req , res , next) => {

    if(req.method !== 'GET') {
        return next();
    } 

    const key = req.originalUrl;
    const cachedResponce = cache.get(key)

    if(cachedResponce ) {
        res.json(cachedResponce)
    } else {
        res.originalSend = res.json;
        res.json = body => {
            res.originalSend(body);
            cache.set(key, body, 100)
        }
        next()
     }                  
     
}