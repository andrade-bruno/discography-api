
import express from 'express'
import { urlencoded, json } from 'body-parser'
import artistsRoutes from './routes/artists'
import connection from './config'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 8000
const server = express()
server.use(json())
server.use(urlencoded({extended: true}))

server.use((
	error: Error,
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	res.status(500).json({ message: error.message})
})

server.use('/artists', artistsRoutes)

connection.sync()
	.then(() => console.info('Database synced successfully'))
	.catch(error => console.error(error))

server.listen(port, () => {
	console.info('\nServer running!')
	console.info(`http://localhost:${port}\n`)
})