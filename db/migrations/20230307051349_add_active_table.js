/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("active_adventures", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("creator").notNullable();
    table.date("date").notNullable();
    table.string("difficulty").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("active_adventures");
};
