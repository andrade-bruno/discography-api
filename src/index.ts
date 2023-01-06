
import express from 'express'
import connection from './config'
import routes from './routes'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 8000
const server = express()

routes(server)

connection.sync()
	.then(() => console.info('Database synced successfully'))
	.catch(error => console.error(error))

server.listen(port, () => {
	console.info('\nServer running!')
	console.info(`http://localhost:${port}\n`)
})