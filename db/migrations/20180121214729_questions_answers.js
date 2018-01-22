
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.string('email');
            table.string('password');
            table.timestamp('createdAt').defaultTo(knex.fn.now());
        }),

        knex.schema.createTable('questions', (table) => {
            table.increments('id').primary();
            table.string('language');
            table.string('question');
            table.string('context');
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.integer('userId').unsigned().references('users.id');
        }),

        knex.schema.createTable('answers', (table) => {
            table.increments('id').primary();
            table.string('answer');
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.integer('userId').unsigned().references('users.id');
            table.integer('questionId').unsigned().references('questions.id');
        }),

        knex.schema.createTable('profiles', (table) => {
            table.increments('id').primary();
            table.string('firstName');
            table.string('lastName');
            table.string('city');
            table.string('state');
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.integer('userId').unsigned().references('users.id');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('questions'),
        knex.schema.dropTable('answers'),
        knex.schema.dropTable('profiles')
    ]);
};
