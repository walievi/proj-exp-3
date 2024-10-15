import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Equipament from './equipament.js'

export default class Category extends BaseModel {
  static table = 'Categories'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @hasMany(() => Equipament)
  declare equipaments: HasMany<typeof Equipament>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  declare deletedAt: DateTime
}
