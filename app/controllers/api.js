
const request = require('request')
const api = async (req, res) => {

 request({
    method: 'GET',
    uri: `https://api.apilayer.com/currency_data/convert?from=${req.query.from_currency_code}&to=${req.query.to_currency_code}&amount=${req.query.amount}`,
    headers: {'apikey': 'tdXAFB0cavDWRP7IyHgv2tmOlkkmuvQe'}
  } , function (error, response, body){
    if(!error && response.statusCode == 200){
      const api = JSON.parse(body);
      const data = { exchange_rate: api.info.quote , currency_code: api.query.to, amount: api.result , api};
      res.json(data);
    }
  })
};

module.exports = {
    api
}
