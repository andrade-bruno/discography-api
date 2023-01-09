import { Sequelize } from "sequelize-typescript"
import Artists from '../models/artists'
import Songs from "../models/songs"
import Discos from '../models/discos'
import dotenv from 'dotenv'
dotenv.config()

export const connection = new Sequelize({
	dialect: 'mysql',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
	logging: false,
	models: [Artists, Songs, Discos]
})

export default connection
