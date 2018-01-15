
exports.up = function(knex, Promise) {
    return knex.schema.createTable('questAns', function(tbl) {
        tbl.integer('questionId').notNullable().references('id').inTable('questions');
        tbl.integer('answerId').notNullable().references('id').inTable('answers');
      });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('questAns');
};
