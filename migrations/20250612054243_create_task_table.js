/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('task', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.boolean('isPending').defaultTo(false);
    table.integer('userId').references('id').inTable('users');
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('task');
}
