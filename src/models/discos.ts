import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
	timestamps: true,
	tableName: 'Discos'
})

export default class Discos extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	title!: string

	@Column({
		type: DataType.DATE,
		allowNull: false
	})
	releaseDate!: string

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	avatar?: string

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	recorder!: string

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	genres?: string

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	type?: string
}