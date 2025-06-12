// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default  {

  development: {
       client: 'pg',
    connection: {
      host: 'localhost',
      user: 'ashishpushpad',
      password: '1234',
      database: 'myappdb',
      port: 5432
    },
    migrations: {
      directory: './migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
/*
to make new table first run this command npx knex init

*/