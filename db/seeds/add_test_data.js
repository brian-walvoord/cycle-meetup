/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('active_adventures').del()
  await knex('active_adventures').insert([
    {title: "first trip", creator: "Bill", date:"2023-9-29T00:00:00.000Z", difficulty: "easy"},
    {title: "second trip", creator: "Janet J", date:"2023-10-29T00:00:00.000Z", difficulty: "medium"},
    {title: "third trip", creator: "Ichiko", date:"2023-11-29T00:00:00.000Z", difficulty: "hard"},
  ]);
};
