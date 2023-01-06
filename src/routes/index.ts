import { Express } from 'express'
import { urlencoded, json } from 'body-parser'

import artistsRoutes from '../routes/artists'
import songsRoutes from '../routes/songs'

export const Routes = (server: Express) => {
	server.use(json())
	server.use(urlencoded({extended: true}))
	
	server.use('/artists', artistsRoutes)
	server.use('/songs', songsRoutes)
}

export default Routes