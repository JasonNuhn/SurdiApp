
exports.up = function(knex, Promise) {
    return knex.schema.createTable('answers', function(tbl) {
        tbl.increments('id', 45);
        tbl.integer('userId', 20).notNullable().references('id').inTable('users');
        tbl.integer('questionId', 20).notNullable().references('id').inTable('questions');
        tbl.string('answer', 45).notNullable();
        tbl.timestamp('createdAt', 45).defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('answers');
};
