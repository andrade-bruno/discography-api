import { Router } from "express"

import ArtistsController from '../controllers/ArtistsController'
import uploadImage from "../services/firebase"
import Multer from "../services/multer"

const router = Router()

router.get('/', ArtistsController.getAllArtists)
router.get('/:id', ArtistsController.getArtistByID)
router.post('/', Multer.single('avatar'), uploadImage, ArtistsController.createArtist)
router.delete('/:id', ArtistsController.deleteArtist)

export default router