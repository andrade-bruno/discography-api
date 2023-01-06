import { RequestHandler } from "express"
import Artists from '../models/artists'

export default class ArtistController {
	static createArtist: RequestHandler = async (req, res) => {
		try {
			const newArtist = await Artists.create({...req.body})
			res.status(201).json({ message: 'Artist created sucessfully', data: newArtist})
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static getAllArtists: RequestHandler = async (req, res) => {
		try {
			const artists = await Artists.findAll()
			res.status(200).json(artists)
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static getArtistByID: RequestHandler = async (req, res) => {
		const { id } = req.params
		try {
			const artist = await Artists.findByPk(id)

			if (!artist) res.status(404).json({ message: 'Artist not found' })
			res.status(200).json(artist)
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static deleteArtist: RequestHandler = async (req, res) => {
		const { id } = req.params
		try {
			const artist = await Artists.findByPk(id)
			if (!artist) res.status(404).json({ message: 'Artist not found' })

			await Artists.destroy({where: {id}})
			res.status(200).json({ message: 'Artist deleted successfully', data: artist })
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}
}