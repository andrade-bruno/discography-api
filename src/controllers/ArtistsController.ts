import { RequestHandler } from "express"
import Artists from '../models/artists'

export const createArtist: RequestHandler = async (req, res, next) => {
	try {
		const newArtist = await Artists.create({...req.body})
		res.status(201).json({ message: 'Artist created sucessfully', artist: newArtist})
	} catch (error: any) {
		res.status(500).json({ message: error.message })
	}
}

export const getAllArtists: RequestHandler = async (req, res, next) => {
	try {
		const artists = await Artists.findAll()
		res.status(200).json(artists)
	} catch (error: any) {
		res.status(500).json({ message: error.message })
	}
}