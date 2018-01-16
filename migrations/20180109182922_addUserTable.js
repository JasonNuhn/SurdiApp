
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
      tbl.increments('id', 45);
      tbl.string('email', 45).notNullable();
      tbl.string('displayName', 45).notNullable();
      tbl.string('password', 45).notNullable();
      tbl.timestamp('createdAt', 45).defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('users');
  };
  