const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors'); 
const server = jsonServer.create();
 const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3302;
const host = 'localhost';
server.use(cors()); 
server.use(middlewares);
server.get('/', (res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
server.use(router);
server.listen(port, host, () => {
  console.log(`JSON Server is running on http://${host}:${port}`);
});
