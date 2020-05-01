exports.handler = async function http (req) {
  console.log('Products API called look for sepcific Id.')
  console.log(req.pathParameters);
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      message: 'Sending you the product id you need!'
    })
  }
}
