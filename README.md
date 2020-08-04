# Node
simple node projects

createServer(req,res) The work of this function is 
when you write http://faceook.com in your request, so what you do here is you are requesting to facebook's server that please load my request. So our request is went there and request will get searched and on successful search we can see loaded fb page!!!
so createServer() also create a server for us.

Purpose of creating this server is, if someone visits our server we can atleast show them that their request is fulfilled or not.

req.header() function gives info about recipient requested data
Using req.setHeader() function we can set content type for response means in which format we have to send response.

//Callback function: it runs/ get called after the execution of fun stmts

 //createReadStream reads data and convert into stream of bytes (big data can be pass)
 //pipe() gives all the data in one go even it is one line or multiline

server.listen() function starts our server.
