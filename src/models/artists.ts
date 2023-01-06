import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
	timestamps: true,
	tableName: 'Artists'
})

export default class Artists extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	title!: string

	@Column({
		type: DataType.DATE,
		allowNull: true
	})
	formedDate?: number

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	mainGenre!: string

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	avatar?: string

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	bio?: string
}