import { Router } from "express"

import {
	createArtist,
	getAllArtists
} from '../controllers/ArtistsController'

const router = Router()

router.get('/', getAllArtists)
router.post('/', createArtist)

export default router