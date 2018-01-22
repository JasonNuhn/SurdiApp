// Update with your config settings.

module.exports = {
// ---- Working with SQLite3 --------
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './database/surdidb.db'
  //   },
  //   migrations: {
  //     tableName: 'migrations',
  //   },
  //   useNullAsDefault: true,
  // }
  // ----The code above works for Sqlite3 ------
 
  // ---- Mysql trial run --------
  // development: {
  //   client: 'mysql',
  //   connection: {
  //     host: '127.0.0.1',
  //     user: 'root',
  //     password: '',
  //     database: 'surdidb',
  //     charset: 'utf8'
  //   },
  //   migrations: {
  //     tableName: 'migrations',
  //   },
  //   useNullAsDefault: true,
  // }
  // ----Mysql trial run------
  

  // ---------Code below is from Tyler Sanford---------
  development: {
    client: 'pg',
    connection: 'postgres://localhost/surdiapp',
    //searchPath: ['knex', 'public'],
    //useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/development'
    }
  }
  // ------------ Code above is from Tyler Sanford -----------------
  // production: {
  //   client: 'mysql',
  //   connection: {
  //     host: 'localhost',
  //     database: 'usersdb',
  //     user:     'jason',
  //     password: 'pass'
  //   },
  //   migrations: {
  //     tableName: 'migrations'
  //   }
  // }

};
