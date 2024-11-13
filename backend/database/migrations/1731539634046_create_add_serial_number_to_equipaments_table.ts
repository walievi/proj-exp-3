import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'equipament'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('serial_number').unique().notNullable().after('model')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('serial_number')
    })
  }
}