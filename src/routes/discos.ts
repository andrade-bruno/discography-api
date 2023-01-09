import { Router } from "express"

import DiscosController from '../controllers/DiscosController'

const router = Router()

router.get('/', DiscosController.getAllDiscos)
router.get('/filter', DiscosController.getDiscosByType)
router.get('/:id', DiscosController.getDiscoByID)
router.post('/', DiscosController.createDisco)
router.delete('/:id', DiscosController.deleteDisco)

export default router