'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up() {
    this.create('contacts', (table) => {
      table.increments()
      table.string('full_name').notNullable()
      table.string('email').notNullable()
      table.string('phone').notNullable()
      table.string('title').notNullable()
      table.string('message').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
