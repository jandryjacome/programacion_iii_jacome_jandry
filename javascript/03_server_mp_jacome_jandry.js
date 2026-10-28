import { createServer } from 'node:http';

const server = createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Biblioteca de Jandry');
    } else if (url === '/catalogo') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Catalogo de libros');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Pagina no encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor de biblioteca funcionando');
});
