@app
begin-app

@static
folder dist

@http
get /api
get /products
get /products/:id

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
