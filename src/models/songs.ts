import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
	timestamps: true,
	tableName: 'Songs'
})

export default class Songs extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	title!: string

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	duration?: string

	@Column({
		type: DataType.INTEGER,
		allowNull: false
	})
	discoId!: number

	@Column({
		type: DataType.STRING,
		allowNull: true
	})
	avatar?: string
}