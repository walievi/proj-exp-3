import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Category from './category.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Equipament extends BaseModel {
  static table = 'Equipament'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string

  @column()
  declare model: string

  @hasMany(() => Category)
  declare category_id: HasMany<typeof Category>

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
