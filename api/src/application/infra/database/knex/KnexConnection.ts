import { Knex, knex } from "knex";

export default class KnexConnection {
  private readonly connection: Knex;

  constructor() {
    const configParams: Knex.Config = {
      client: "pg",
      connection: {
        host: process.env.DB_HOSTNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      },
    };

    this.connection = knex(configParams);
  }

  getInstance(): Knex {
    return this.connection;
  }
}
