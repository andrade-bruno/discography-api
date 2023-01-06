import { Router } from "express"

import ArtistsController from '../controllers/ArtistsController'

const router = Router()

router.get('/', ArtistsController.getAllArtists)
router.get('/:id', ArtistsController.getArtistByID)
router.post('/', ArtistsController.createArtist)
router.delete('/:id', ArtistsController.deleteArtist)

export default router