import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Equipaments'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('quantity').notNullable().unsigned()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('quantity')
    })
  }
}
