import { Router } from "express"

import SongsController from '../controllers/SongsController'

const router = Router()

router.get('/', SongsController.getAllSongs)
router.get('/:id', SongsController.getSongByID)
router.post('/', SongsController.createSong)
router.delete('/:id', SongsController.deleteSong)

export default router