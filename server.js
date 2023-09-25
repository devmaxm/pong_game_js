const app = require('./app')
const http = require('http')
const io = require('socket.io')
const sockets = require('./sockets')

const httpServer = http.createServer(app)
const socketServer = io(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

const PORT = 3000

function bootstrap() {
    httpServer.listen(PORT)
    console.log(`Server running on port ${PORT}`)
    sockets.listen(socketServer)
}

bootstrap()
