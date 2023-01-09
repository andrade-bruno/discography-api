import { RequestHandler } from 'express'
import admin, { ServiceAccount } from 'firebase-admin'
import account from '../config/firebase-key.json'

const BUCKET = 'discography-api-node.appspot.com'

admin.initializeApp({
	credential: admin.credential.cert(<ServiceAccount>account),
	storageBucket: BUCKET
})

const bucket = admin.storage().bucket()

export const uploadImage: RequestHandler = (req, res, next) => {
	if(!req.file) return next()

	const image = req.file
	const filename = Date.now() + '.' + image.originalname.replace(/ /g, "_").split('.').pop()

	const file = bucket.file(filename)

	const stream = file.createWriteStream({
		metadata: {
			contentType: image.mimetype
		}
	})

	stream.on('error', (e) => {
		console.error(e)
	})

	stream.on('finish', async () => {
		await file.makePublic()

		req.body.avatar = `https://storage.googleapis.com/${bucket.name}/${file.name}`
		next()
	})

	stream.end(image.buffer)
}

export default uploadImage