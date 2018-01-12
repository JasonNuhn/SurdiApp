
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
      tbl.increments('idUser', 45);
      tbl.string('firstName', 20).notNullable();
      tbl.string('lastName', 20).notNullable();
      tbl.string('email', 45).notNullable();
      tbl.string('displayName', 45).notNullable();
      tbl.string('city', 45).notNullable();
      tbl.string('state', 45).notNullable();
      tbl.timestamp('createdAt', 45).defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('users');
  };
  