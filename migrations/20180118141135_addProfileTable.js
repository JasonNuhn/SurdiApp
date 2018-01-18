
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profiles', function(tbl) {
        tbl.increments('id', 45);
        tbl.integer('userId', 45).notNullable().references('id').inTable('users');
        tbl.string('firstName', 45).notNullable();
        tbl.string('lastName', 45).notNullable();
        tbl.string('city', 45).notNullable();
        tbl.string('state', 45).notNullable();
        tbl.timestamp('createdAt', 45).defaultTo(knex.fn.now());
      });
    };
    
    exports.down = function(knex, Promise) {
      knex.schema.dropTableIfExists('profiles');
    };
