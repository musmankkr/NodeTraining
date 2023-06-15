var http = require('http');
const fs = require('fs');

var fileData;
fs.readFile('abc.text', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(fileData + " from api");
  res.end();
}).listen(8080);