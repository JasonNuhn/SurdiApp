
exports.up = function(knex, Promise) {
    return knex.schema.createTable('questions', function(tbl) {
        tbl.increments('id', 45);
        tbl.integer('userId', 20).notNullable().references('id').inTable('users');
        tbl.string('language', 45).notNullable();
        tbl.string('question', 45).notNullable();
        tbl.string('context', 45).notNullable();
        tbl.timestamp('createdAt', 45).defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('questions');
};
