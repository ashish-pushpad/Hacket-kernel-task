import knex from "knex";
import { Model } from 'objection';
import dotenv from 'dotenv'

dotenv.config();
const db = knex({
  client: "pg",
    connection: {
    host: '127.0.0.1',
    user: 'ashishpushpad',   
    password: '',                
    database: 'myappdb',
    port: 5432,
  }
  
});

Model.knex(db);

export default db;
