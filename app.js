const express = require('express');
const productRouter = require('./routes/product');

const server = express();

server.listen(3000);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.static(__dirname + '/public'));

server.use('/product', productRouter);