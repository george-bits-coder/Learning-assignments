const path =require('path');

const PORT =3000;

const jsonServer=require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.join(__dirname,'db.json'));

const middlewares= jsonServer.defaults();

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/api',router)
server.listen(PORT,()=>console.log(`json server is running on port ${PORT}`));