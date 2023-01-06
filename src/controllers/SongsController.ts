import { RequestHandler } from "express"
import Songs from '../models/songs'

export default class SongsController {
	static createSong: RequestHandler = async (req, res) => {
		try {
			const newSong = await Songs.create({...req.body})
			res.status(201).json({ message: 'Song created sucessfully', data: newSong})
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static getAllSongs: RequestHandler = async (req, res) => {
		try {
			const songs = await Songs.findAll()
			res.status(200).json(songs)
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static getSongByID: RequestHandler = async (req, res) => {
		const { id } = req.params
		try {
			const song = await Songs.findByPk(id)

			if (!song) res.status(404).json({ message: 'Song not found' })
			res.status(200).json(song)
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}

	static deleteSong: RequestHandler = async (req, res) => {
		const { id } = req.params
		try {
			const song = await Songs.findByPk(id)
			if (!song) res.status(404).json({ message: 'Song not found' })

			await Songs.destroy({where: {id}})
			res.status(200).json({ message: 'Song deleted successfully', data: song })
		} catch (error: any) {
			res.status(500).json({ message: error.message })
		}
	}
}