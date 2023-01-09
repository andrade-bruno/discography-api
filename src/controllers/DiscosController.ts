import { RequestHandler } from "express"
import Discos from '../models/discos'

export default class DiscosController {
	static createDisco: RequestHandler = async (req, res) => {
		try {
			const newDisco = await Discos.create({...req.body})
			res.status(201).json({ message: 'Disco created sucessfully', data: newDisco})
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static getAllDiscos: RequestHandler = async (req, res) => {
		try {
			const discos = await Discos.findAll()
			res.status(200).json(discos)
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static getDiscoByID: RequestHandler = async (req, res) => {
		const { id } = req.params
		try {
			const disco = await Discos.findByPk(id)

			if (!disco) res.status(404).json({ message: 'Disco not found' })
			else res.status(200).json(disco)
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static deleteDisco: RequestHandler = async (req, res) => {
		const { id } = req.params
		try {
			const disco = await Discos.findByPk(id)
			
			if (!disco) res.status(404).json({ message: 'Disco not found' })
			else {
				await Discos.destroy({where: {id}})
				res.status(200).json({ message: 'Disco deleted successfully', data: disco })
			}
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}
}