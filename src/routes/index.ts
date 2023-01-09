import { Express } from 'express'
import { urlencoded, json } from 'body-parser'

import artists from '../routes/artists'
import songs from '../routes/songs'
import discos from '../routes/discos'

export const Routes = (server: Express) => {
	server.use(json())
	server.use(urlencoded({extended: true}))
	
	server.use('/artists', artists)
	server.use('/songs', songs)
	server.use('/discos', discos)
}

export default Routes