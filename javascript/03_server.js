
import { createServer } from 'node:http'

const server = createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Hello World 🌎')

  } else if (url === '/contacto') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Página de Contacto 📞')

  } else if (url === '/acerca') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Acerca de nosotros 👋')

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Error 404: La ruta no funciona o no existe ❌')
  }
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
})
