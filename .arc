@app
begin-app

@static
folder dist

@http
get /api
get /products

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
