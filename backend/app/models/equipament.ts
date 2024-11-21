import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
// import { BaseModel, belongsTo, column, beforeCreate } from '@adonisjs/lucid/orm'
import Category from './category.js'
import Patrimony from './patrimony.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
// import { randomUUID } from 'node:crypto'

export default class Equipament extends BaseModel {
  static table = 'Equipament'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare model: string

  @column()
  declare serialNumber: string

  @column()
  declare manufacturer: string

  @column({ serializeAs: null })
  declare categoryId: number

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @hasOne(() => Patrimony)
  declare patrimony: HasOne<typeof Patrimony>

  @column()
  declare description: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  declare deletedAt: DateTime

  // @beforeCreate()
  // static assignUuid(equipament: Equipament) {
  //   equipament.id = randomUUID()
  // }
}
