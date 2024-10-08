import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Equipaments'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('status_id').notNullable().unsigned().references('id').inTable('Status')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('status_id')
    })
  }
}
