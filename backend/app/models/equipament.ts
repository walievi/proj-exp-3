import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Category from './category.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Status from './status.js'

export default class Equipament extends BaseModel {
  static table = 'Equipaments'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string

  @column()
  declare model: string

  @column({ serializeAs: null })
  declare statusId: number

  @column({ serializeAs: null })
  declare categoryId: number

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @belongsTo(() => Status)
  declare status: BelongsTo<typeof Status>

  @column()
  declare description: string | null

  @column()
  declare quantity: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
