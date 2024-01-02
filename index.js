const http=require('http');
const hostname= '127.0.0.1'; 
const port = 4000;
const server = http.createServer ((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hola mundi');
});

server.listen(port, hostname, () => {
    console.log('Iniciando Servidor Web.');
});
/**para verlo en el navegador 
 * ejecutamos el codigo (ingresando el comando 
 * node index.js en la terminal) y luego vamos 
 * a un navegador e ingresamos localhost.300
 * o 127.0.0.1:3000*/

