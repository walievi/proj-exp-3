import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Equipaments'

  async up() {
    this.defer(async (db) => {
      await db.rawQuery('ALTER TABLE ?? ADD CONSTRAINT UNIQUE_CODE UNIQUE (code)', [this.tableName])
    })
  }

  async down() {
    this.defer(async (db) => {
      await db.rawQuery('ALTER TABLE ?? DROP INDEX ??', [this.tableName, 'UNIQUE_CODE'])
    })
  }
}
