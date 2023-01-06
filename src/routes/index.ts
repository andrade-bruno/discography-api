import { Express } from 'express'
import artistsRoutes from '../routes/artists'
import { urlencoded, json } from 'body-parser'

export const Routes = (server: Express) => {
	server.use(json())
	server.use(urlencoded({extended: true}))
	
	server.use('/artists', artistsRoutes)
}

export default Routes