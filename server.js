const app = require('./src/app');

const PORT = 3000

const servers = app.listen(PORT, () => {
    console.log(`project started wiith port ${PORT}`)
})

process.on('SIGINT', () => {
    servers.close(() => {
        console.log(`Server closed`)
        process.exit(0)
    })
})