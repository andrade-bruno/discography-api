import express from 'express'
const port = 8000

const server = express()

server.get('/', (req, res) => {
	res.status(200).json('Discography API with Node, Typescript, Express and Sequelize')
})

server.get('/Hi', (req, res) => {
	res.status(200).json('Hi')
})

server.listen(port, () => {
	console.info('\nServer is running!')
	console.info(`http://localhost:${port}\n`)
})