import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, beforeCreate } from '@adonisjs/lucid/orm'
import Equipament from './equipament.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class Patrimony extends BaseModel {
  static table = 'Patrimony'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare patrimonyCode: string

  @column({ serializeAs: null })
  declare equipamentId: number

  @belongsTo(() => Equipament)
  declare equipament: BelongsTo<typeof Equipament>

  @column()
  declare description: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  declare deletedAt: DateTime | null;


  @beforeCreate()
  static assignUuid(patrimony: Patrimony) {
    patrimony.id = randomUUID()
  }
}