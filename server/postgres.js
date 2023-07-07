const { Pool } = require("pg");
//not recommended, change this later
var pool = new Pool({
    user: "postgres",
    host: "db",
    port: "5432",
    database: "recipe",
    password: "1643",
});
module.exports = pool;
