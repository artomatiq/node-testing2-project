/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('soldiers').insert([
    {soldier_name: 'Art'},
    {soldier_name: 'John'},
    {soldier_name: 'Alexander'}
  ]);
};