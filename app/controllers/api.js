const request = require('request'

)
const api = async (req, res) => {  
/**
 * @TODO logic of exchange 
*/    

 request({
    method: 'GET',
    uri: `https://api.apilayer.com/currency_data/convert?from=${req.query.from_currency_code}&to=${req.query.to_currency_code}&amount=${(req.query.amount / 100)}`,
    headers: {'apikey': 'tdXAFB0cavDWRP7IyHgv2tmOlkkmuvQe'}
  } , function (error, response, body){
    if(!error && response.statusCode == 200){
      const api = JSON.parse(body);
      const data = { 
         exchange_rate: Math.round(api.info.quote * 1000) / 1000 ,
         currency_code: api.query.to,
         amout1: (Math.round(api.result * 10000) / 100), 
         api
        };
      
      res.json(data);
    }
  })
};

module.exports = {
    api
}
